// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Eraser, Download, Image as ImageIcon, Pen, MessageSquare, Share, Trash2, Zap } from 'lucide-react';

const Experience = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState('pen');
  const [aiResult, setAiResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const ctx = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.7;
    
    // Set initial canvas state
    ctx.current.lineCap = 'round';
    ctx.current.lineJoin = 'round';
    ctx.current.strokeStyle = color;
    ctx.current.lineWidth = brushSize;
    
    // Fill with white background
    ctx.current.fillStyle = 'white';
    ctx.current.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    if (ctx.current) {
      ctx.current.strokeStyle = color;
      ctx.current.lineWidth = brushSize;
    }
  }, [color, brushSize]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    ctx.current.beginPath();
    ctx.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = getCoordinates(e);
    
    if (tool === 'pen') {
      ctx.current.lineTo(offsetX, offsetY);
      ctx.current.stroke();
    } else if (tool === 'eraser') {
      ctx.current.save();
      ctx.current.strokeStyle = 'white';
      ctx.current.lineTo(offsetX, offsetY);
      ctx.current.stroke();
      ctx.current.restore();
      ctx.current.strokeStyle = color;
    }
  };

  const stopDrawing = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };

  const getCoordinates = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top
      };
    }
    return {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY
    };
  };

  const clearCanvas = () => {
    ctx.current.fillStyle = 'white';
    ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setAiResult('');
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'ai-whiteboard.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const analyzeWithAI = async () => {
    setIsLoading(true);
    try {
      // Get the canvas image as base64
      const imageData = canvasRef.current.toDataURL('image/png');
      
      // Call the AI API
      const response = await fetch('/api/process_whiteboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          image_data: imageData,
          query: aiPrompt || "Analyze this content and provide feedback" 
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAiResult(data.result);
      } else {
        setAiResult("Error: " + data.error);
      }
    } catch (error) {
      setAiResult("Failed to analyze: " + error.message);
    }
    setIsLoading(false);
  };

  const solveMathProblem = async () => {
    setIsLoading(true);
    try {
      const imageData = canvasRef.current.toDataURL('image/png');
      
      const response = await fetch('/api/solve_math', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image_data: imageData })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAiResult(data.solution);
      } else {
        setAiResult("Error: " + data.error);
      }
    } catch (error) {
      setAiResult("Failed to solve: " + error.message);
    }
    setIsLoading(false);
  };

  const solvePhysicsProblem = async () => {
    setIsLoading(true);
    try {
      const imageData = canvasRef.current.toDataURL('image/png');
      
      const response = await fetch('/api/physics_helper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image_data: imageData })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAiResult(data.solution);
      } else {
        setAiResult("Error: " + data.error);
      }
    } catch (error) {
      setAiResult("Failed to analyze: " + error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI-Powered Whiteboard</h1>
          <div className="flex space-x-4">
            <button 
              onClick={downloadImage}
              className="bg-indigo-700 hover:bg-indigo-800 px-3 py-2 rounded-md flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Save
            </button>
            <button 
              onClick={() => {}}
              className="bg-indigo-700 hover:bg-indigo-800 px-3 py-2 rounded-md flex items-center"
            >
              <Share className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 p-4">
        <div className="flex flex-col w-full max-w-6xl mx-auto gap-4">
          <div className="flex flex-wrap gap-4">
            {/* Tools */}
            <div className="flex bg-white p-2 rounded-md shadow">
              <button 
                onClick={() => setTool('pen')}
                className={`p-2 rounded ${tool === 'pen' ? 'bg-indigo-100 text-indigo-600' : ''}`}
                title="Draw"
              >
                <Pen className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setTool('eraser')}
                className={`p-2 rounded ${tool === 'eraser' ? 'bg-indigo-100 text-indigo-600' : ''}`}
                title="Erase"
              >
                <Eraser className="w-6 h-6" />
              </button>
              <button
                onClick={clearCanvas}
                className="p-2 rounded hover:bg-red-100 hover:text-red-600"
                title="Clear All"
              >
                <Trash2 className="w-6 h-6" />
              </button>
            </div>

            {/* Colors */}
            <div className="flex bg-white p-2 rounded-md shadow items-center">
              <span className="mr-2">Color:</span>
              <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 rounded-md cursor-pointer"
              />
              <div className="flex ml-2 space-x-1">
                {['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'].map((clr) => (
                  <div 
                    key={clr}
                    onClick={() => setColor(clr)}
                    className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
                    style={{ backgroundColor: clr }}
                  />
                ))}
              </div>
            </div>

            {/* Brush Size */}
            <div className="flex bg-white p-2 rounded-md shadow items-center">
              <span className="mr-2">Size:</span>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={brushSize} 
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="w-24"
              />
              <span className="ml-2">{brushSize}px</span>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {/* Canvas */}
            <div className="bg-white rounded-lg shadow-md w-full lg:w-2/3 overflow-hidden">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="border border-gray-200 rounded-lg bg-white w-full h-full cursor-crosshair"
              />
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-lg shadow-md p-4 w-full lg:w-1/3 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                AI Assistant
              </h2>
              
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter prompt for AI (optional)"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={analyzeWithAI}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Analyze'}
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-1" />}
                </button>
              </div>
              
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={solveMathProblem}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex-1"
                  disabled={isLoading}
                >
                  Solve Math
                </button>
                <button
                  onClick={solvePhysicsProblem}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm flex-1"
                  disabled={isLoading}
                >
                  Physics Helper
                </button>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md flex-1 overflow-y-auto mb-2">
                {isLoading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="h-2 bg-slate-300 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-slate-300 rounded w-24"></div>
                    </div>
                  </div>
                ) : aiResult ? (
                  <div className="whitespace-pre-wrap">{aiResult}</div>
                ) : (
                  <div className="text-gray-500 flex flex-col items-center justify-center h-full">
                    <MessageSquare className="w-12 h-12 mb-2 opacity-30" />
                    <p>Draw something and click Analyze to get AI feedback</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
            <h3 className="font-medium text-indigo-700 mb-2">How to use:</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Draw math equations or physics problems on the whiteboard</li>
              <li>Use the pen tool to write and draw, eraser to remove content</li>
              <li>Click "Solve Math" for step-by-step math solutions</li>
              <li>Click "Physics Helper" for physics problem assistance</li>
              <li>Use "Analyze" with a custom prompt for other types of feedback</li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-gray-300 p-4 text-center text-sm">
        © 2024 AI Whiteboard - Created by Flaunch
      </footer>
    </div>
  );
};

export default EX;