import React, { useState } from 'react';
import { Brain, CheckCircle, Circle } from 'lucide-react';

const InterviewPrepView = ({ curriculum }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-6 shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Brain size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Interview Mastery</h1>
            <p className="text-lg mt-2 opacity-90">Never freeze again - master every Gen AI question</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {(curriculum.interviewQuestions || []).map((category, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
              className="w-full p-6 text-left hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{category.category}</h3>
                  <div className="text-sm text-gray-600">{category.questions.length} questions</div>
                </div>
                <div className="text-blue-600 font-bold text-2xl">
                  {expandedCategory === idx ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedCategory === idx && (
              <div className="border-t border-gray-200 p-6 space-y-6 bg-gray-50">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="bg-white rounded-lg p-5 shadow">
                    <div className="font-bold text-lg mb-3 text-blue-900">
                      Q: {item.q}
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <div className="text-sm font-semibold text-green-900 mb-2">Your Answer:</div>
                      <div className="text-gray-800">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">🎯 Interview Strategy</h3>
        <div className="space-y-2 text-sm">
          <div>✓ Practice answering OUT LOUD - not just reading</div>
          <div>✓ Connect every answer to YOUR TCS projects</div>
          <div>✓ Use the STAR method: Situation → Task → Action → Result</div>
          <div>✓ Record yourself answering - watch for confidence gaps</div>
          <div>✓ Practice with a friend or use AI mock interviews</div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepView;
