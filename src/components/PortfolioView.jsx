import React from 'react';
import { Award, ExternalLink, Github } from 'lucide-react';

const PortfolioView = ({ curriculum }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-white mb-6 shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Award size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Your Portfolio</h1>
            <p className="text-lg mt-2 opacity-90">12 projects that prove you're production-ready</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(curriculum.portfolioProjects || []).map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">#{project.id}</div>
              <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{project.week}</div>
            </div>

            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            <div className="text-sm text-gray-600 mb-3">{project.tech}</div>

            <div className="bg-blue-50 text-blue-700 text-sm px-3 py-2 rounded-lg mb-4">
              <span className="font-semibold">Value:</span> {project.value}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-1">
                <Github size={16} />
                Repo
              </button>
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-1">
                <ExternalLink size={16} />
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Portfolio Guidelines</h2>
        <div className="space-y-4 text-gray-700">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="font-semibold mb-1">Each project must have:</div>
            <ul className="text-sm space-y-1">
              <li>• Clean, well-documented code</li>
              <li>• Comprehensive README with setup instructions</li>
              <li>• Demo video or live deployment link</li>
              <li>• Screenshots showing key features</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <div className="font-semibold mb-1">Make it shine:</div>
            <ul className="text-sm space-y-1">
              <li>• Add tests to show code quality</li>
              <li>• Include performance metrics</li>
              <li>• Document architectural decisions</li>
              <li>• Show before/after comparisons</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <div className="font-semibold mb-1">Portfolio website tips:</div>
            <ul className="text-sm space-y-1">
              <li>• Keep it simple and fast-loading</li>
              <li>• Show projects in order of impressiveness</li>
              <li>• Include your TCS experience with Gen AI projects</li>
              <li>• Make it mobile-responsive</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">🚀 Portfolio Impact</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-semibold mb-2">Without Portfolio:</div>
            <ul className="space-y-1 opacity-90">
              <li>• "Can you show me your work?" → awkward silence</li>
              <li>• Interviewer doubts your skills</li>
              <li>• Lower salary offers</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">With Strong Portfolio:</div>
            <ul className="space-y-1 opacity-90">
              <li>• "Can you show me your work?" → confident demo</li>
              <li>• Interviewer sees proof of skills</li>
              <li>• 20-30% higher salary offers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
