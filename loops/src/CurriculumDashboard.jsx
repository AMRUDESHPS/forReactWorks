import React, { useState } from 'react';

const CurriculumDashboard = () => {
  const [activeTrack, setActiveTrack] = useState('competitive');

  const tracks = {
    competitive: {
      title: 'Competitive Programming Track',
      topics: [
        'Algorithms and Data Structures',
        'Time and Space Complexity Analysis',
        'Problem-solving Strategies',
        'Practice on Codeforces, LeetCode, HackerRank'
      ]
    },
    mern: {
      title: 'MERN Stack Development Track',
      topics: [
        'Web Development Basics (HTML, CSS, JavaScript)',
        'MongoDB Database Management',
        'Express.js Backend Development',
        'React.js Frontend Development',
        'Node.js Server-side Programming',
        'Full-stack Project Development'
      ]
    }
  };

  const timeline = [
    { weeks: '1-2', phase: 'Community Launch & Recruitment' },
    { weeks: '3-6', phase: 'Foundational Courses' },
    { weeks: '7-14', phase: 'Parallel Track Development' },
    { weeks: '15-16', phase: 'Projects & Mock Competition' }
  ];

  const outcomes = [
    'Increased participation in coding competitions',
    'Improved tech company placement rates',
    'Real-world MERN stack projects',
    'Supportive peer-learning community',
    'Enhanced campus technical reputation'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Campus Programmers Community (CPC)</h1>
        <p className="text-gray-600">Fostering Excellence in Programming & Development</p>
      </div>

      {/* Main Tracks */}
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTrack === 'competitive'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTrack('competitive')}
          >
            Competitive Programming
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTrack === 'mern'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTrack('mern')}
          >
            MERN Stack
          </button>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="text-2xl font-bold mb-4">{tracks[activeTrack].title}</h2>
          <ul className="space-y-2">
            {tracks[activeTrack].topics.map((topic, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-2xl font-bold mb-4">Implementation Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {timeline.map((period, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50">
              <div className="font-bold text-lg">Week {period.weeks}</div>
              <div className="text-gray-600">{period.phase}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Outcomes */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-2xl font-bold mb-4">Expected Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumDashboard;