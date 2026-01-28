import { Code, Brain, Zap, Trophy, Rocket, Briefcase } from 'lucide-react';

export const curriculumData = {
  metadata: {
    totalMonths: 6,
    totalWeeks: 24,
    totalHours: 600,
    targetOutcome: "Production-ready AI Engineer with portfolio",
    commitment: "3-4 hours daily for 6 months",
    targetAudience: "2nd year students with no prior AI experience"
  },

  months: [
    {
      id: 1,
      title: "Python Programming Fundamentals",
      weeks: 4,
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      description: "Master Python from scratch - the foundation of AI Engineering",
      skillProgress: "Python 0/10 → 7/10",

      weeks_detail: [
        {
          weekNum: 1,
          title: "Python Basics",
          goal: "Learn Python syntax, variables, data types, and control flow",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: That BMW M5's engine runs on 600+ lines of code. You'll need 60,000+ to afford it. Start with print('Hello World')",
              dailyGoal: "Setup environment and understand Python basics",
              concepts: [
                {
                  id: "m1w1d1c1",
                  title: "What is Python? Why Python for AI?",
                  videoUrl: "https://www.youtube.com/watch?v=Y8Tko2YC5hA",
                  channel: "Krish Naik",
                  duration: "15 min",
                  xp: 15
                },
                {
                  id: "m1w1d1c2",
                  title: "Installing Python & VS Code Setup",
                  videoUrl: "https://www.youtube.com/watch?v=bCY4akMn5vU",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 20
                },
                {
                  id: "m1w1d1c3",
                  title: "Variables and Data Types",
                  videoUrl: "https://www.youtube.com/watch?v=ORCuz7s5cCY",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w1d1h1",
                  title: "Print 'Hello World' variations",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/523b4ff7adca849afe000035",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d1h2",
                  title: "String to Integer conversion",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/544675c6f971f7399a000e79",
                  difficulty: "easy",
                  xp: 15
                }
              ],
              totalXP: 90
            },
            {
              day: "👑 Girls: Your code should be as elegant as your standards. Lists, strings, tuples - organized like a queen's priorities",
              dailyGoal: "Master Python data types in depth",
              concepts: [
                {
                  id: "m1w1d2c1",
                  title: "Strings in Python",
                  videoUrl: "https://www.youtube.com/watch?v=lSItwlnF0eU",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 20
                },
                {
                  id: "m1w1d2c2",
                  title: "Lists and Tuples",
                  videoUrl: "https://www.youtube.com/watch?v=Eaz5e6M8tL4",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w1d2c3",
                  title: "Dictionaries and Sets",
                  videoUrl: "https://www.youtube.com/watch?v=XCcpzWs-CI4",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w1d2h1",
                  title: "Reverse a String",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/5168bb5dfe9a00b126000018",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d2h2",
                  title: "Find the smallest integer in array",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/55a2d7ebe362f0d69800007f",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d2h3",
                  title: "Count characters in string",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/52efefcbcdf57161d4000091",
                  difficulty: "easy",
                  xp: 15
                }
              ],
              totalXP: 115
            },
            {
              day: "🚗 Boys: Lamborghini engineers don't guess operators, they KNOW them. +, -, *, / - precision is power",
              dailyGoal: "Learn operators and expressions",
              concepts: [
                {
                  id: "m1w1d3c1",
                  title: "Arithmetic and Comparison Operators",
                  videoUrl: "https://www.youtube.com/watch?v=v5MR5JnKcZI",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 20
                },
                {
                  id: "m1w1d3c2",
                  title: "Logical and Bitwise Operators",
                  videoUrl: "https://www.youtube.com/watch?v=PgAu4MfVwWw",
                  channel: "Corey Schafer",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w1d3h1",
                  title: "Basic Calculator Operations",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/57356c55867b9b7a60000bd7",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d3h2",
                  title: "Even or Odd",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/53da3dbb4a5168369a0000fe",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d3h3",
                  title: "Multiply numbers",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/50654ddff44f800200000004",
                  difficulty: "easy",
                  xp: 15
                }
              ],
              totalXP: 85
            },
            {
              day: "💎 Girls: If-else is life. If he's worthy, keep him. Else, delete him from memory. Same logic applies to bugs",
              dailyGoal: "Master control flow - if/else statements",
              concepts: [
                {
                  id: "m1w1d4c1",
                  title: "If-Else Statements",
                  videoUrl: "https://www.youtube.com/watch?v=f4KOjWS_KZs",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w1d4c2",
                  title: "Nested Conditions and elif",
                  videoUrl: "https://www.youtube.com/watch?v=IBOHc87yFYw",
                  channel: "Corey Schafer",
                  duration: "25 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w1d4h1",
                  title: "Positive, Negative or Zero",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/5a76b36f8038ad0f920001a0",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d4h2",
                  title: "Grade Calculator",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/55cbd4ba903825f7970000f5",
                  difficulty: "easy",
                  xp: 20
                },
                {
                  id: "m1w1d4h3",
                  title: "Leap Year Checker",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/526c7b931962fe43c80001fc",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 100
            },
            {
              day: "🏁 Boys: RCB lost 7 finals because they didn't loop through their mistakes. For-while mastery = no repeat failures",
              dailyGoal: "Learn loops - for and while",
              concepts: [
                {
                  id: "m1w1d5c1",
                  title: "For Loops in Python",
                  videoUrl: "https://www.youtube.com/watch?v=0ZvaDa8eT5s",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w1d5c2",
                  title: "While Loops and Loop Control",
                  videoUrl: "https://www.youtube.com/watch?v=HZARImviDxg",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w1d5h1",
                  title: "Sum of Numbers 1 to N",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/57f780909f7e8e5b790005ea",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d5h2",
                  title: "Factorial Calculator",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/57a049e253ba33ac5e000212",
                  difficulty: "easy",
                  xp: 20
                },
                {
                  id: "m1w1d5h3",
                  title: "FizzBuzz",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/5300901726d12b80e8000498",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 100
            },
            {
              day: "🌟 Girls: Functions are self-respect in code form. Define them once, call them when YOU decide. Know your worth",
              dailyGoal: "Functions in Python",
              concepts: [
                {
                  id: "m1w1d6c1",
                  title: "Defining Functions",
                  videoUrl: "https://www.youtube.com/watch?v=u-OmVr_fT4s",
                  channel: "Krish Naik",
                  duration: "35 min",
                  xp: 30
                },
                {
                  id: "m1w1d6c2",
                  title: "Parameters, Arguments, Return Values",
                  videoUrl: "https://www.youtube.com/watch?v=9Os0o3wzS_I",
                  channel: "Corey Schafer",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w1d6c3",
                  title: "*args and **kwargs",
                  videoUrl: "https://www.youtube.com/watch?v=4jBJhCaNrWU",
                  channel: "Corey Schafer",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w1d6h1",
                  title: "Create greeting function",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/55225023e1be1ec8bc000390",
                  difficulty: "easy",
                  xp: 15
                },
                {
                  id: "m1w1d6h2",
                  title: "Sum function with variable args",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/5168b125faced29f66000005",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 110
            },
            {
              day: "🔥 Weekend Project: The temperature converter you build today is like your standards - precise and non-negotiable",
              dailyGoal: "Weekend Project - Build Temperature Converter",
              concepts: [],
              weekendProject: {
                id: "m1w1proj",
                name: "Temperature Converter",
                description: "Build a CLI app that converts between Celsius, Fahrenheit, and Kelvin",
                requirements: [
                  "Accept user input for temperature value",
                  "Menu to select conversion type",
                  "Use functions for each conversion",
                  "Handle invalid inputs gracefully",
                  "Allow multiple conversions in one session"
                ],
                xp: 100,
                estimatedHours: 3
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 2,
          title: "OOP & Python Libraries",
          goal: "Learn Object-Oriented Programming and essential libraries",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: A Maserati is a CLASS. Each Maserati Quattroporte is an OBJECT. OOP isn't just code, it's how kings think",
              dailyGoal: "Introduction to OOP concepts",
              concepts: [
                {
                  id: "m1w2d1c1",
                  title: "Classes and Objects",
                  videoUrl: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
                  channel: "Corey Schafer",
                  duration: "35 min",
                  xp: 30
                },
                {
                  id: "m1w2d1c2",
                  title: "Constructors and __init__",
                  videoUrl: "https://www.youtube.com/watch?v=RSl87lqOXDE",
                  channel: "Corey Schafer",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w2d1h1",
                  title: "Create a Student class",
                  platform: "Codewars",
                  url: "https://www.codewars.com/kata/5a03af9606d5b65ff7000009",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 75
            },
            {
              day: "👑 Girls: Inheritance is like self-worth - passed down but YOU decide how to use it. Override bad patterns, keep the crown",
              dailyGoal: "Inheritance and Polymorphism",
              concepts: [
                {
                  id: "m1w2d2c1",
                  title: "Inheritance in Python",
                  videoUrl: "https://www.youtube.com/watch?v=Cn7AkDb4pIU",
                  channel: "Corey Schafer",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w2d2c2",
                  title: "Polymorphism and Method Overriding",
                  videoUrl: "https://www.youtube.com/watch?v=d8kCdLCi6Lk",
                  channel: "Corey Schafer",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w2d2h1",
                  title: "Create Animal hierarchy",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 75
            },
            {
              day: "🚗 Boys: Encapsulation is why BMW keeps their engine secrets private. Your code, your rules, your empire",
              dailyGoal: "Introduction to NumPy",
              concepts: [
                {
                  id: "m1w2d3c1",
                  title: "NumPy Arrays Basics",
                  videoUrl: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                },
                {
                  id: "m1w2d3c2",
                  title: "Array Operations and Indexing",
                  videoUrl: "https://www.youtube.com/watch?v=GB9ByFAIAH4",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w2d3h1",
                  title: "Array manipulation exercises",
                  platform: "HackerRank",
                  url: "https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=numpy",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 85
            },
            {
              day: "💎 Girls: File handling is like managing emotions - open when ready, read carefully, close when done. Handle with grace",
              dailyGoal: "NumPy for Mathematical Operations",
              concepts: [
                {
                  id: "m1w2d4c1",
                  title: "Matrix Operations in NumPy",
                  videoUrl: "https://www.youtube.com/watch?v=8ndsDXohLMQ",
                  channel: "Krish Naik",
                  duration: "35 min",
                  xp: 30
                },
                {
                  id: "m1w2d4c2",
                  title: "Broadcasting and Vectorization",
                  videoUrl: "https://www.youtube.com/watch?v=4Xdm-bK8JHE",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w2d4h1",
                  title: "Matrix multiplication practice",
                  platform: "HackerRank",
                  url: "https://www.hackerrank.com/challenges/np-dot-and-cross",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 75
            },
            {
              day: "🏁 Boys: Every RCB player uses debugging to analyze their shots. print() statements are your instant replay",
              dailyGoal: "Introduction to Pandas",
              concepts: [
                {
                  id: "m1w2d5c1",
                  title: "Pandas DataFrames",
                  videoUrl: "https://www.youtube.com/watch?v=vmEHCJofslg",
                  channel: "Keith Galli",
                  duration: "60 min",
                  xp: 40
                },
                {
                  id: "m1w2d5c2",
                  title: "Reading and Writing CSV files",
                  videoUrl: "https://www.youtube.com/watch?v=yzIMircGU5I",
                  channel: "Data School",
                  duration: "25 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w2d5h1",
                  title: "Kaggle Pandas exercises",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/pandas",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 85
            },
            {
              day: "🌟 Girls: Exception handling is boundaries in code. Try to hurt me? Except: I'll handle it. Finally: I move on stronger",
              dailyGoal: "Data Manipulation with Pandas",
              concepts: [
                {
                  id: "m1w2d6c1",
                  title: "Filtering and Selecting Data",
                  videoUrl: "https://www.youtube.com/watch?v=ZyhVh-qRZPA",
                  channel: "Corey Schafer",
                  duration: "30 min",
                  xp: 25
                },
                {
                  id: "m1w2d6c2",
                  title: "GroupBy and Aggregations",
                  videoUrl: "https://www.youtube.com/watch?v=txMdrV1Ut64",
                  channel: "Corey Schafer",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w2d6h1",
                  title: "Data analysis mini-project",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 80
            },
            {
              day: "🔥 Weekend Project: Build that contact book like you'd curate your circle - only quality entries allowed",
              dailyGoal: "Weekend Project - Data Analysis Script",
              concepts: [],
              weekendProject: {
                id: "m1w2proj",
                name: "Weather Data Analyzer",
                description: "Load a CSV of weather data and compute statistics",
                requirements: [
                  "Load CSV file using Pandas",
                  "Compute mean, median, max, min temperatures",
                  "Find hottest and coldest days",
                  "Group data by month",
                  "Export summary to new CSV"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 3,
          title: "Mathematics for AI - Linear Algebra & Calculus",
          goal: "Understand the math foundations for machine learning",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: NumPy arrays are Lamborghini's gearbox - fast, efficient, engineered for performance. No room for slow lists",
              dailyGoal: "Vectors and Scalars",
              concepts: [
                {
                  id: "m1w3d1c1",
                  title: "Introduction to Linear Algebra",
                  videoUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
                  channel: "3Blue1Brown",
                  duration: "16 min",
                  xp: 20
                },
                {
                  id: "m1w3d1c2",
                  title: "Vectors - What even are they?",
                  videoUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
                  channel: "3Blue1Brown",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w3d1h1",
                  title: "Vector operations in Python",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 65
            },
            {
              day: "👑 Girls: Vectors have direction AND magnitude. Like your ambitions - know where you're going AND how powerful you are",
              dailyGoal: "Matrix Operations",
              concepts: [
                {
                  id: "m1w3d2c1",
                  title: "Matrix Multiplication",
                  videoUrl: "https://www.youtube.com/watch?v=XkY2DOUCWMU",
                  channel: "3Blue1Brown",
                  duration: "25 min",
                  xp: 25
                },
                {
                  id: "m1w3d2c2",
                  title: "Linear Transformations",
                  videoUrl: "https://www.youtube.com/watch?v=kYB8IZa5AuE",
                  channel: "3Blue1Brown",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w3d2h1",
                  title: "Implement matrix multiplication from scratch",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 80
            },
            {
              day: "🚗 Boys: Matrix multiplication is how BMW calculates suspension physics. Linear algebra = engineering excellence",
              dailyGoal: "Eigenvalues and Eigenvectors",
              concepts: [
                {
                  id: "m1w3d3c1",
                  title: "Eigenvalues and Eigenvectors",
                  videoUrl: "https://www.youtube.com/watch?v=PFDu9oVAE-g",
                  channel: "3Blue1Brown",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m1w3d3h1",
                  title: "Compute eigenvalues using NumPy",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 55
            },
            {
              day: "💎 Girls: Dot products measure alignment. Make sure your efforts align with your worth. Orthogonal = zero compatibility",
              dailyGoal: "Introduction to Calculus for AI",
              concepts: [
                {
                  id: "m1w3d4c1",
                  title: "Derivatives and Gradients",
                  videoUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
                  channel: "3Blue1Brown",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m1w3d4c2",
                  title: "Chain Rule (Critical for Backpropagation)",
                  videoUrl: "https://www.youtube.com/watch?v=YG15m2VwSjA",
                  channel: "3Blue1Brown",
                  duration: "18 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w3d4h1",
                  title: "Implement gradient descent from scratch",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 85
            },
            {
              day: "🏁 Boys: RCB uses statistics for player performance. mean(), std() - analytics separate champions from average",
              dailyGoal: "Partial Derivatives and Optimization",
              concepts: [
                {
                  id: "m1w3d5c1",
                  title: "Partial Derivatives",
                  videoUrl: "https://www.youtube.com/watch?v=AXqhWeUEtQU",
                  channel: "Khan Academy",
                  duration: "15 min",
                  xp: 20
                },
                {
                  id: "m1w3d5c2",
                  title: "Gradient Descent Intuition",
                  videoUrl: "https://www.youtube.com/watch?v=IHZwWFHWa-w",
                  channel: "3Blue1Brown",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w3d5h1",
                  title: "Optimize a simple function",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 70
            },
            {
              day: "🌟 Girls: Probability is knowing your odds, but DECIDING your outcome. np.random is fate, your choice is destiny",
              dailyGoal: "Math Review and Practice",
              concepts: [
                {
                  id: "m1w3d6c1",
                  title: "Linear Algebra for ML - Summary",
                  videoUrl: "https://www.youtube.com/watch?v=ZumgfOei0Ak",
                  channel: "StatQuest",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w3d6h1",
                  title: "Math practice problems",
                  platform: "Khan Academy",
                  url: "https://www.khanacademy.org/math/linear-algebra",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🔥 Weekend Project: Calculate compound interest like you're building generational wealth - numbers don't lie",
              dailyGoal: "Weekend Project - Matrix Operations Library",
              concepts: [],
              weekendProject: {
                id: "m1w3proj",
                name: "Matrix Operations Library",
                description: "Build a Python library for basic matrix operations",
                requirements: [
                  "Matrix addition and subtraction",
                  "Matrix multiplication",
                  "Transpose",
                  "Determinant calculation",
                  "Use NumPy for verification"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 4,
          title: "Probability & Statistics for AI",
          goal: "Master probability and statistics for ML algorithms",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Pandas DataFrames are your Maserati's dashboard - all the data, perfectly organized, at your command",
              dailyGoal: "Probability Basics",
              concepts: [
                {
                  id: "m1w4d1c1",
                  title: "Probability Distributions",
                  videoUrl: "https://www.youtube.com/watch?v=oI3hZJqXJuc",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 25
                },
                {
                  id: "m1w4d1c2",
                  title: "Normal Distribution",
                  videoUrl: "https://www.youtube.com/watch?v=rzFX5NWojp0",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w4d1h1",
                  title: "Generate distributions with Python",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 65
            },
            {
              day: "👑 Girls: Clean data is self-care. dropna() the toxicity, fillna() with positivity. Your dataset, your peace",
              dailyGoal: "Bayes Theorem",
              concepts: [
                {
                  id: "m1w4d2c1",
                  title: "Bayes Theorem Explained",
                  videoUrl: "https://www.youtube.com/watch?v=HZGCoVF3YvM",
                  channel: "3Blue1Brown",
                  duration: "15 min",
                  xp: 25
                },
                {
                  id: "m1w4d2c2",
                  title: "Bayes in Machine Learning",
                  videoUrl: "https://www.youtube.com/watch?v=O2L2Uv9pdDA",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w4d2h1",
                  title: "Implement Bayes classifier",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 80
            },
            {
              day: "🚗 Boys: groupby() is how Audi R8 owners organize their garage - by performance tier. Aggregate power",
              dailyGoal: "Descriptive Statistics",
              concepts: [
                {
                  id: "m1w4d3c1",
                  title: "Mean, Median, Mode, Variance",
                  videoUrl: "https://www.youtube.com/watch?v=SzZ6GpcfoQY",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                },
                {
                  id: "m1w4d3c2",
                  title: "Standard Deviation",
                  videoUrl: "https://www.youtube.com/watch?v=MRqtXL2WX2M",
                  channel: "StatQuest",
                  duration: "12 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m1w4d3h1",
                  title: "Calculate stats from dataset",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 55
            },
            {
              day: "💎 Girls: Matplotlib visualizations tell your story. Make it colorful, meaningful, and impossible to ignore",
              dailyGoal: "Hypothesis Testing",
              concepts: [
                {
                  id: "m1w4d4c1",
                  title: "Hypothesis Testing",
                  videoUrl: "https://www.youtube.com/watch?v=0oc49DyA3hU",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m1w4d4c2",
                  title: "p-values Explained",
                  videoUrl: "https://www.youtube.com/watch?v=vemZtEM63GY",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m1w4d4h1",
                  title: "Perform t-test in Python",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 70
            },
            {
              day: "🏁 Boys: merge() DataFrames like you merge business connections. Inner join = exclusive partnerships only",
              dailyGoal: "Overfitting and Bias-Variance Tradeoff",
              concepts: [
                {
                  id: "m1w4d5c1",
                  title: "Bias-Variance Tradeoff",
                  videoUrl: "https://www.youtube.com/watch?v=EuBBz3bI-aA",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w4d5h1",
                  title: "Visualize bias-variance",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🌟 Girls: pivot_table() is restructuring reality. Reshape data like you reshape narratives in your favor",
              dailyGoal: "Data Visualization with Matplotlib",
              concepts: [
                {
                  id: "m1w4d6c1",
                  title: "Matplotlib Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
                  channel: "Corey Schafer",
                  duration: "35 min",
                  xp: 30
                },
                {
                  id: "m1w4d6c2",
                  title: "Seaborn for Statistical Plots",
                  videoUrl: "https://www.youtube.com/watch?v=6GUZXDef2U0",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m1w4d6h1",
                  title: "Create statistical visualizations",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 75
            },
            {
              day: "🔥 Weekend Project: Analyze your future salary growth - because knowing your worth starts with data",
              dailyGoal: "Weekend Project - Coin Flip Simulator",
              concepts: [],
              weekendProject: {
                id: "m1w4proj",
                name: "Coin Flip Probability Analyzer",
                description: "Create a simulation that demonstrates probability concepts",
                requirements: [
                  "Simulate 1000+ coin flips",
                  "Calculate empirical probability",
                  "Visualize with histogram",
                  "Compute mean, variance, std deviation",
                  "Compare with theoretical values"
                ],
                xp: 100,
                estimatedHours: 3
              },
              totalXP: 100
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      weeks: 4,
      color: "from-green-500 to-emerald-500",
      icon: Brain,
      description: "Learn core ML algorithms and build your first models",
      skillProgress: "ML 0/10 → 6/10",

      weeks_detail: [
        {
          weekNum: 5,
          title: "Introduction to Machine Learning",
          goal: "Understand ML fundamentals and linear regression",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: ML is how Tesla predicts your drive patterns. Supervised learning = navigating with certainty",
              dailyGoal: "What is Machine Learning?",
              concepts: [
                {
                  id: "m2w5d1c1",
                  title: "What is Machine Learning?",
                  videoUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
                  channel: "Stanford CS229",
                  duration: "60 min",
                  xp: 40
                },
                {
                  id: "m2w5d1c2",
                  title: "Types of ML: Supervised vs Unsupervised",
                  videoUrl: "https://www.youtube.com/watch?v=1FZ0A1QCMWc",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 65
            },
            {
              day: "👑 Girls: Training data is past experience. But YOU validate what lessons to keep. Train wisely, reign supreme",
              dailyGoal: "Train/Test Split and Model Evaluation",
              concepts: [
                {
                  id: "m2w5d2c1",
                  title: "Train, Validation, Test Split",
                  videoUrl: "https://www.youtube.com/watch?v=fwY9Qv96DJY",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m2w5d2c2",
                  title: "Cross Validation",
                  videoUrl: "https://www.youtube.com/watch?v=fSytzGwwBVw",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m2w5d2h1",
                  title: "Sklearn train_test_split",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/intro-to-machine-learning",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 65
            },
            {
              day: "🚗 Boys: train_test_split is why BMW R&D tests prototypes before launch. Never ship untested models",
              dailyGoal: "Linear Regression - Theory",
              concepts: [
                {
                  id: "m2w5d3c1",
                  title: "Linear Regression Explained",
                  videoUrl: "https://www.youtube.com/watch?v=nk2CQITm_eo",
                  channel: "StatQuest",
                  duration: "30 min",
                  xp: 30
                },
                {
                  id: "m2w5d3c2",
                  title: "Cost Function and MSE",
                  videoUrl: "https://www.youtube.com/watch?v=sDv4f4s2SB8",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 55
            },
            {
              day: "💎 Girls: Feature scaling is equality in data. StandardScaler ensures nothing overshadows your other qualities",
              dailyGoal: "Linear Regression - Implementation",
              concepts: [
                {
                  id: "m2w5d4c1",
                  title: "Gradient Descent for Linear Regression",
                  videoUrl: "https://www.youtube.com/watch?v=sDv4f4s2SB8",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w5d4h1",
                  title: "Implement Linear Regression with Sklearn",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/intro-to-machine-learning",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🏁 Boys: Cross-validation is RCB analyzing all IPL seasons, not just one lucky match. Consistency over luck",
              dailyGoal: "Evaluation Metrics for Regression",
              concepts: [
                {
                  id: "m2w5d5c1",
                  title: "R-squared and Adjusted R-squared",
                  videoUrl: "https://www.youtube.com/watch?v=2AQKmw14mHM",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m2w5d5c2",
                  title: "MAE, MSE, RMSE",
                  videoUrl: "https://www.youtube.com/watch?v=LDRbO9a6XPU",
                  channel: "Krish Naik",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m2w5d5h1",
                  title: "Evaluate model performance",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 65
            },
            {
              day: "🌟 Girls: Overfitting is people-pleasing in code. Don't memorize their expectations, learn YOUR generalized power",
              dailyGoal: "Feature Engineering Basics",
              concepts: [
                {
                  id: "m2w5d6c1",
                  title: "Feature Scaling - Normalization vs Standardization",
                  videoUrl: "https://www.youtube.com/watch?v=mnKm3YP56PY",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w5d6h1",
                  title: "Apply scaling to dataset",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 45
            },
            {
              day: "🔥 Weekend Project: Predict house prices like you're scouting your future mansion - informed decisions only",
              dailyGoal: "Weekend Project - House Price Predictor",
              concepts: [],
              weekendProject: {
                id: "m2w5proj",
                name: "House Price Prediction",
                description: "Build a Linear Regression model to predict house prices",
                requirements: [
                  "Load Boston Housing or similar dataset",
                  "Perform EDA with visualizations",
                  "Split data and train model",
                  "Evaluate with R-squared",
                  "Save model using pickle"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 6,
          title: "Logistic Regression & Classification",
          goal: "Master classification algorithms and evaluation",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Linear Regression predicts Lamborghini resale value. y = mx + b is the formula to depreciation-proof wealth",
              dailyGoal: "Introduction to Classification",
              concepts: [
                {
                  id: "m2w6d1c1",
                  title: "Logistic Regression",
                  videoUrl: "https://www.youtube.com/watch?v=yIYKR4sgzI8",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 30
                },
                {
                  id: "m2w6d1c2",
                  title: "Sigmoid Function",
                  videoUrl: "https://www.youtube.com/watch?v=JDU3AzH3WKg",
                  channel: "Krish Naik",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [],
              totalXP: 50
            },
            {
              day: "👑 Girls: Regression lines find the BEST fit, not ANY fit. Same energy for relationships and code",
              dailyGoal: "Classification Metrics",
              concepts: [
                {
                  id: "m2w6d2c1",
                  title: "Confusion Matrix",
                  videoUrl: "https://www.youtube.com/watch?v=Kdsp6soqA7o",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                },
                {
                  id: "m2w6d2c2",
                  title: "Precision, Recall, F1-Score",
                  videoUrl: "https://www.youtube.com/watch?v=j-EB6RqqjGI",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w6d2h1",
                  title: "Implement classification metrics",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 70
            },
            {
              day: "🚗 Boys: Polynomial features add curves to Maserati body lines. Sometimes linear isn't enough for beauty",
              dailyGoal: "Regularization",
              concepts: [
                {
                  id: "m2w6d3c1",
                  title: "L1 and L2 Regularization",
                  videoUrl: "https://www.youtube.com/watch?v=Q81RR3yKn30",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w6d3h1",
                  title: "Compare regularized models",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "💎 Girls: R² score is how well your predictions align with reality. Aim for 1.0 in code AND life planning",
              dailyGoal: "Multi-class Classification",
              concepts: [
                {
                  id: "m2w6d4c1",
                  title: "One-vs-Rest and One-vs-One",
                  videoUrl: "https://www.youtube.com/watch?v=sxPL760f6Lg",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w6d4h1",
                  title: "MNIST digit classification",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/c/digit-recognizer",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🏁 Boys: Gradient descent is RCB climbing the points table - small steps, right direction, eventual victory",
              dailyGoal: "ROC and AUC",
              concepts: [
                {
                  id: "m2w6d5c1",
                  title: "ROC and AUC Explained",
                  videoUrl: "https://www.youtube.com/watch?v=4jRBRDbJemM",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w6d5h1",
                  title: "Plot ROC curves",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🌟 Girls: Regularization prevents over-commitment. Lasso drops useless features, Ridge keeps all but balanced",
              dailyGoal: "Handling Imbalanced Data",
              concepts: [
                {
                  id: "m2w6d6c1",
                  title: "SMOTE and Oversampling",
                  videoUrl: "https://www.youtube.com/watch?v=FheTDyCwRdE",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w6d6h1",
                  title: "Handle imbalanced dataset",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🔥 Weekend Project: Predict your salary - because negotiating without data is like racing blindfolded",
              dailyGoal: "Weekend Project - Spam Classifier",
              concepts: [],
              weekendProject: {
                id: "m2w6proj",
                name: "Email Spam Classifier",
                description: "Build a Logistic Regression spam classifier",
                requirements: [
                  "Load spam email dataset",
                  "Preprocess text data",
                  "Train Logistic Regression",
                  "Evaluate with precision, recall, F1",
                  "Create confusion matrix"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 7,
          title: "Decision Trees & Ensemble Methods",
          goal: "Master tree-based algorithms and ensemble techniques",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Logistic Regression classifies: Is this a supercar or not? Binary decisions, maximum clarity",
              dailyGoal: "Decision Trees",
              concepts: [
                {
                  id: "m2w7d1c1",
                  title: "Decision Trees Explained",
                  videoUrl: "https://www.youtube.com/watch?v=_L39rN6gz7Y",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 30
                },
                {
                  id: "m2w7d1c2",
                  title: "Gini Impurity and Entropy",
                  videoUrl: "https://www.youtube.com/watch?v=7VeUPuFGJHk",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 55
            },
            {
              day: "👑 Girls: Confusion matrix reveals true positives in life. Know who's genuinely loyal vs. false positives",
              dailyGoal: "Random Forest",
              concepts: [
                {
                  id: "m2w7d2c1",
                  title: "Random Forest",
                  videoUrl: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m2w7d2c2",
                  title: "Bagging Explained",
                  videoUrl: "https://www.youtube.com/watch?v=2Mg8QD0F1dQ",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m2w7d2h1",
                  title: "Train Random Forest classifier",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/intermediate-machine-learning",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 75
            },
            {
              day: "🚗 Boys: Decision trees are BMW's manufacturing decision paths. Each node = a precise engineering choice",
              dailyGoal: "Gradient Boosting",
              concepts: [
                {
                  id: "m2w7d3c1",
                  title: "Gradient Boosting",
                  videoUrl: "https://www.youtube.com/watch?v=3CC4N4z3GJc",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m2w7d3h1",
                  title: "Train Gradient Boosting model",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 55
            },
            {
              day: "💎 Girls: Precision vs Recall - would you rather catch ALL opportunities (recall) or only the RIGHT ones (precision)?",
              dailyGoal: "XGBoost",
              concepts: [
                {
                  id: "m2w7d4c1",
                  title: "XGBoost Explained",
                  videoUrl: "https://www.youtube.com/watch?v=OtD8wVaFm6E",
                  channel: "StatQuest",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m2w7d4h1",
                  title: "XGBoost on Kaggle dataset",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/xgboost",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 60
            },
            {
              day: "🏁 Boys: Random Forest combines 100 player opinions to make one perfect team decision. Ensemble power",
              dailyGoal: "Hyperparameter Tuning",
              concepts: [
                {
                  id: "m2w7d5c1",
                  title: "Grid Search and Random Search",
                  videoUrl: "https://www.youtube.com/watch?v=HdlDYng8g9s",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w7d5h1",
                  title: "Tune hyperparameters with GridSearchCV",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: ROC curves show your threshold choices. Where do YOU draw the line? AUC measures your standards",
              dailyGoal: "Feature Importance",
              concepts: [
                {
                  id: "m2w7d6c1",
                  title: "Feature Importance in Tree Models",
                  videoUrl: "https://www.youtube.com/watch?v=H4XlI6Q6RK4",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w7d6h1",
                  title: "Visualize feature importance",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 45
            },
            {
              day: "🔥 Weekend Project: Classify spam emails like you filter toxic people - high precision, no false negatives",
              dailyGoal: "Weekend Project - Customer Churn Prediction",
              concepts: [],
              weekendProject: {
                id: "m2w7proj",
                name: "Bank Customer Churn Prediction",
                description: "Predict which customers will leave using Random Forest",
                requirements: [
                  "Load customer dataset",
                  "Feature engineering",
                  "Compare Decision Tree vs Random Forest vs XGBoost",
                  "Hyperparameter tuning",
                  "Feature importance analysis"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 8,
          title: "Unsupervised Learning",
          goal: "Master clustering and dimensionality reduction",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: SVM finds the perfect boundary between Bugatti and everyone else. Maximum margin = maximum exclusivity",
              dailyGoal: "K-Means Clustering",
              concepts: [
                {
                  id: "m2w8d1c1",
                  title: "K-Means Clustering",
                  videoUrl: "https://www.youtube.com/watch?v=4b5d3muPQmA",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m2w8d1c2",
                  title: "Elbow Method",
                  videoUrl: "https://www.youtube.com/watch?v=E81b-0ZxPic",
                  channel: "Krish Naik",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m2w8d1h1",
                  title: "K-Means implementation",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 70
            },
            {
              day: "👑 Girls: K-Means clustering finds your tribe. Let the algorithm group you with queens, not pretenders",
              dailyGoal: "Hierarchical Clustering",
              concepts: [
                {
                  id: "m2w8d2c1",
                  title: "Hierarchical Clustering",
                  videoUrl: "https://www.youtube.com/watch?v=7xHsRkOdVwo",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w8d2h1",
                  title: "Create dendrograms",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🚗 Boys: XGBoost is why Porsche keeps winning races. Boosting weak learners into championship material",
              dailyGoal: "DBSCAN",
              concepts: [
                {
                  id: "m2w8d3c1",
                  title: "DBSCAN Clustering",
                  videoUrl: "https://www.youtube.com/watch?v=RDZUdRSDOok",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w8d3h1",
                  title: "DBSCAN on spatial data",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "💎 Girls: PCA reduces dimensionality to what TRULY matters. Cut the noise, keep the essence of who you are",
              dailyGoal: "PCA - Dimensionality Reduction",
              concepts: [
                {
                  id: "m2w8d4c1",
                  title: "Principal Component Analysis",
                  videoUrl: "https://www.youtube.com/watch?v=FgakZw6K1QQ",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m2w8d4h1",
                  title: "Apply PCA to high-dimensional data",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 60
            },
            {
              day: "🏁 Boys: Hyperparameter tuning is RCB adjusting batting order for maximum impact. GridSearch perfection",
              dailyGoal: "t-SNE for Visualization",
              concepts: [
                {
                  id: "m2w8d5c1",
                  title: "t-SNE Explained",
                  videoUrl: "https://www.youtube.com/watch?v=NEaUSP4YerM",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w8d5h1",
                  title: "Visualize MNIST with t-SNE",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🌟 Girls: Feature importance tells you what ACTUALLY predicts success. Focus energy on what moves the needle",
              dailyGoal: "Anomaly Detection",
              concepts: [
                {
                  id: "m2w8d6c1",
                  title: "Anomaly Detection Techniques",
                  videoUrl: "https://www.youtube.com/watch?v=kx_CKUaHYz0",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m2w8d6h1",
                  title: "Detect anomalies in dataset",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🔥 Weekend Project: Customer segmentation is knowing your audience - market yourself to the right crowd",
              dailyGoal: "Weekend Project - Customer Segmentation",
              concepts: [],
              weekendProject: {
                id: "m2w8proj",
                name: "Customer Segmentation with K-Means",
                description: "Segment customers based on purchasing behavior",
                requirements: [
                  "Load customer data",
                  "Apply K-Means clustering",
                  "Find optimal K with elbow method",
                  "Visualize clusters",
                  "Interpret customer segments"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Deep Learning & Neural Networks",
      weeks: 4,
      color: "from-purple-500 to-pink-500",
      icon: Zap,
      description: "Master neural networks - the core of modern AI",
      skillProgress: "Deep Learning 0/10 → 7/10",

      weeks_detail: [
        {
          weekNum: 9,
          title: "Introduction to Neural Networks",
          goal: "Understand how neural networks work from scratch",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Neural networks are Ferrari's AI driving assistant - layers of intelligence for peak performance",
              dailyGoal: "What are Neural Networks?",
              concepts: [
                {
                  id: "m3w9d1c1",
                  title: "But what is a Neural Network?",
                  videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
                  channel: "3Blue1Brown",
                  duration: "19 min",
                  xp: 30
                },
                {
                  id: "m3w9d1c2",
                  title: "Perceptron and Activation Functions",
                  videoUrl: "https://www.youtube.com/watch?v=GVsUOuSjvcg",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 55
            },
            {
              day: "👑 Girls: Activation functions decide what passes through. Like your boundaries - ReLU blocks negativity",
              dailyGoal: "Forward Propagation",
              concepts: [
                {
                  id: "m3w9d2c1",
                  title: "Gradient Descent, how neural networks learn",
                  videoUrl: "https://www.youtube.com/watch?v=IHZwWFHWa-w",
                  channel: "3Blue1Brown",
                  duration: "21 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w9d2h1",
                  title: "Implement forward pass from scratch",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🚗 Boys: Forward propagation is the Lambo accelerator. Data flows forward, predictions emerge. Speed is essence",
              dailyGoal: "Backpropagation",
              concepts: [
                {
                  id: "m3w9d3c1",
                  title: "What is backpropagation really doing?",
                  videoUrl: "https://www.youtube.com/watch?v=Ilg3gGewQ5U",
                  channel: "3Blue1Brown",
                  duration: "14 min",
                  xp: 30
                },
                {
                  id: "m3w9d3c2",
                  title: "Backpropagation calculus",
                  videoUrl: "https://www.youtube.com/watch?v=tIeHLnjs5U8",
                  channel: "3Blue1Brown",
                  duration: "10 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w9d3h1",
                  title: "Implement backprop manually",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 40
                }
              ],
              totalXP: 95
            },
            {
              day: "💎 Girls: Backpropagation is learning from mistakes. Gradient flows back, weights update. Growth is painful but necessary",
              dailyGoal: "Activation Functions Deep Dive",
              concepts: [
                {
                  id: "m3w9d4c1",
                  title: "Sigmoid, ReLU, Tanh, Softmax",
                  videoUrl: "https://www.youtube.com/watch?v=Xvg00QnyaIY",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w9d4h1",
                  title: "Compare activation functions",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🏁 Boys: Loss functions measure how far you are from the championship. Cross-entropy = your performance gap",
              dailyGoal: "Loss Functions",
              concepts: [
                {
                  id: "m3w9d5c1",
                  title: "Cross Entropy Loss",
                  videoUrl: "https://www.youtube.com/watch?v=6ArSys5qHAU",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 25
                },
                {
                  id: "m3w9d5c2",
                  title: "MSE vs Cross Entropy",
                  videoUrl: "https://www.youtube.com/watch?v=Md5qFpm1VnY",
                  channel: "Krish Naik",
                  duration: "15 min",
                  xp: 20
                }
              ],
              handson: [],
              totalXP: 45
            },
            {
              day: "🌟 Girls: Optimizers find the path of least resistance to your goals. Adam optimizer = smart, adaptive queen energy",
              dailyGoal: "Introduction to TensorFlow/Keras",
              concepts: [
                {
                  id: "m3w9d6c1",
                  title: "TensorFlow 2.0 Complete Course",
                  videoUrl: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m3w9d6h1",
                  title: "Build first Keras model",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 70
            },
            {
              day: "🔥 Weekend Project: Build a neural net from scratch. Understanding beats copying. Know your own power",
              dailyGoal: "Weekend Project - MNIST from Scratch",
              concepts: [],
              weekendProject: {
                id: "m3w9proj",
                name: "MNIST Digit Classifier",
                description: "Build a neural network from scratch to classify digits",
                requirements: [
                  "Load MNIST dataset",
                  "Build NN with NumPy only",
                  "Implement forward and backprop",
                  "Train for 10 epochs",
                  "Achieve 90%+ accuracy"
                ],
                xp: 150,
                estimatedHours: 6
              },
              totalXP: 150
            }
          ]
        },
        {
          weekNum: 10,
          title: "Convolutional Neural Networks (CNNs)",
          goal: "Master CNNs for image recognition",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: CNNs are how Tesla's cameras recognize road signs. Convolutions = eyes of the machine, vision of the future",
              dailyGoal: "How CNNs Work",
              concepts: [
                {
                  id: "m3w10d1c1",
                  title: "But what is a convolution?",
                  videoUrl: "https://www.youtube.com/watch?v=KuXjwB4LzSA",
                  channel: "3Blue1Brown",
                  duration: "23 min",
                  xp: 30
                },
                {
                  id: "m3w10d1c2",
                  title: "CNN Architectures Explained",
                  videoUrl: "https://www.youtube.com/watch?v=YRhxdVk_sIs",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 55
            },
            {
              day: "👑 Girls: Filters extract features you want to see. Apply the right filter to life - amplify beauty, minimize noise",
              dailyGoal: "CNN Layers",
              concepts: [
                {
                  id: "m3w10d2c1",
                  title: "Convolutional Layers, Pooling, Fully Connected",
                  videoUrl: "https://www.youtube.com/watch?v=pj9-rr1wDhM",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w10d2h1",
                  title: "Build CNN with Keras",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/learn/intro-to-deep-learning",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🚗 Boys: Pooling reduces complexity while keeping essence. MaxPool keeps the BEST, just like your garage",
              dailyGoal: "Regularization in Deep Learning",
              concepts: [
                {
                  id: "m3w10d3c1",
                  title: "Dropout Explained",
                  videoUrl: "https://www.youtube.com/watch?v=ARq74QuavAo",
                  channel: "StatQuest",
                  duration: "15 min",
                  xp: 20
                },
                {
                  id: "m3w10d3c2",
                  title: "Batch Normalization",
                  videoUrl: "https://www.youtube.com/watch?v=yXOMHOpbon8",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w10d3h1",
                  title: "Add regularization to CNN",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 70
            },
            {
              day: "💎 Girls: Padding protects edges from being lost. Some boundaries need extra protection. Self-preservation is code",
              dailyGoal: "Famous CNN Architectures",
              concepts: [
                {
                  id: "m3w10d4c1",
                  title: "VGG, ResNet, Inception",
                  videoUrl: "https://www.youtube.com/watch?v=dZVkygnKh1M",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w10d4h1",
                  title: "Use pretrained ResNet",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 60
            },
            {
              day: "🏁 Boys: ImageNet is RCB's trophy cabinet goal - 1000 classes of excellence to aspire to",
              dailyGoal: "Data Augmentation",
              concepts: [
                {
                  id: "m3w10d5c1",
                  title: "Image Data Augmentation",
                  videoUrl: "https://www.youtube.com/watch?v=mTVf7BN7S8w",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w10d5h1",
                  title: "Implement augmentation pipeline",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🌟 Girls: Transfer learning is inheriting wisdom. Don't start from zero when giants offer their shoulders",
              dailyGoal: "Transfer Learning",
              concepts: [
                {
                  id: "m3w10d6c1",
                  title: "Transfer Learning Explained",
                  videoUrl: "https://www.youtube.com/watch?v=yofjFQddwHE",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w10d6h1",
                  title: "Fine-tune VGG16 on custom dataset",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/c/dogs-vs-cats",
                  difficulty: "medium",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🔥 Weekend Project: Image classifier - teach machines to see the world through YOUR categories",
              dailyGoal: "Weekend Project - CIFAR-10 Classifier",
              concepts: [],
              weekendProject: {
                id: "m3w10proj",
                name: "CIFAR-10 Image Classifier",
                description: "Build a CNN to classify CIFAR-10 images",
                requirements: [
                  "Load CIFAR-10 dataset",
                  "Build CNN architecture",
                  "Use data augmentation",
                  "Apply dropout and batch norm",
                  "Achieve 80%+ accuracy"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 11,
          title: "Recurrent Neural Networks (RNNs)",
          goal: "Master sequence models for time-series and text",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: RNNs remember the lap sequence. Every corner matters. Sequential data is racing telemetry",
              dailyGoal: "Introduction to RNNs",
              concepts: [
                {
                  id: "m3w11d1c1",
                  title: "Recurrent Neural Networks",
                  videoUrl: "https://www.youtube.com/watch?v=AsNTP8Kwu80",
                  channel: "StatQuest",
                  duration: "20 min",
                  xp: 25
                },
                {
                  id: "m3w11d1c2",
                  title: "RNN Architecture Explained",
                  videoUrl: "https://www.youtube.com/watch?v=Y2wfIKQyd1I",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 50
            },
            {
              day: "👑 Girls: Memory in networks is like emotional intelligence. Past context shapes present understanding",
              dailyGoal: "Vanishing Gradient Problem",
              concepts: [
                {
                  id: "m3w11d2c1",
                  title: "Vanishing Gradient Problem",
                  videoUrl: "https://www.youtube.com/watch?v=qhXZsFVxGKo",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w11d2h1",
                  title: "Visualize gradient flow",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🚗 Boys: Vanishing gradients are why McLaren improved pit stop memory. Long sequences need LSTM cells",
              dailyGoal: "LSTM Networks",
              concepts: [
                {
                  id: "m3w11d3c1",
                  title: "LSTM clearly explained",
                  videoUrl: "https://www.youtube.com/watch?v=YCzL96nL7j0",
                  channel: "StatQuest",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w11d3h1",
                  title: "Build LSTM for text",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 60
            },
            {
              day: "💎 Girls: Forget gates decide what to release. Some memories don't serve you. Let the LSTM handle letting go",
              dailyGoal: "GRU Networks",
              concepts: [
                {
                  id: "m3w11d4c1",
                  title: "GRU Explained",
                  videoUrl: "https://www.youtube.com/watch?v=8HyCNIVRbSU",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w11d4h1",
                  title: "Compare LSTM vs GRU",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🏁 Boys: Time series is IPL match-by-match analysis. Predict tomorrow's performance from yesterday's data",
              dailyGoal: "Sequence to Sequence Models",
              concepts: [
                {
                  id: "m3w11d5c1",
                  title: "Seq2Seq Models",
                  videoUrl: "https://www.youtube.com/watch?v=L8HKweZIOmg",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 30
                }
              ],
              handson: [],
              totalXP: 30
            },
            {
              day: "🌟 Girls: Bidirectional LSTMs read past AND future. Like intuition - you sense what's coming while learning from what was",
              dailyGoal: "Time Series Forecasting",
              concepts: [
                {
                  id: "m3w11d6c1",
                  title: "Time Series with LSTM",
                  videoUrl: "https://www.youtube.com/watch?v=QIUxPv5PJOY",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w11d6h1",
                  title: "Stock price prediction",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🔥 Weekend Project: Predict stock prices - because financial independence is the ultimate liberation",
              dailyGoal: "Weekend Project - Stock Price Predictor",
              concepts: [],
              weekendProject: {
                id: "m3w11proj",
                name: "Stock Price Prediction with LSTM",
                description: "Build an LSTM model to predict stock prices",
                requirements: [
                  "Fetch historical stock data",
                  "Preprocess time series",
                  "Build LSTM model",
                  "Predict next 7 days",
                  "Visualize predictions"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 12,
          title: "Advanced Deep Learning",
          goal: "Master advanced architectures: GANs, Autoencoders, Transfer Learning",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: GANs create fake Ferraris so real that experts can't tell. Generator vs Discriminator = ultimate competition",
              dailyGoal: "Autoencoders",
              concepts: [
                {
                  id: "m3w12d1c1",
                  title: "Autoencoders Explained",
                  videoUrl: "https://www.youtube.com/watch?v=7mRfwaGGAPg",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w12d1h1",
                  title: "Build autoencoder for denoising",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "👑 Girls: Autoencoders compress you to your essence, then reconstruct stronger. Transformation through compression",
              dailyGoal: "Variational Autoencoders (VAE)",
              concepts: [
                {
                  id: "m3w12d2c1",
                  title: "VAE Explained",
                  videoUrl: "https://www.youtube.com/watch?v=9zKuYvjFFS8",
                  channel: "Arxiv Insights",
                  duration: "20 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w12d2h1",
                  title: "Generate faces with VAE",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🚗 Boys: Batch normalization is F1 tire management - consistent performance across all track conditions",
              dailyGoal: "Introduction to GANs",
              concepts: [
                {
                  id: "m3w12d3c1",
                  title: "GANs Explained",
                  videoUrl: "https://www.youtube.com/watch?v=8L11aMN5KY8",
                  channel: "Computerphile",
                  duration: "15 min",
                  xp: 25
                },
                {
                  id: "m3w12d3c2",
                  title: "How GANs work",
                  videoUrl: "https://www.youtube.com/watch?v=Sw9r8CL98N0",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 50
            },
            {
              day: "💎 Girls: Dropout is trusting yourself without all resources. Sometimes constraints reveal your true capability",
              dailyGoal: "Building GANs",
              concepts: [
                {
                  id: "m3w12d4c1",
                  title: "Build GAN from scratch",
                  videoUrl: "https://www.youtube.com/watch?v=OljTVUVzPpM",
                  channel: "Aladdin Persson",
                  duration: "40 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m3w12d4h1",
                  title: "Generate MNIST digits with GAN",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 40
                }
              ],
              totalXP: 75
            },
            {
              day: "🏁 Boys: Learning rate scheduling is IPL strategy - aggressive early, conservative in finals. Timing is everything",
              dailyGoal: "Transfer Learning Deep Dive",
              concepts: [
                {
                  id: "m3w12d5c1",
                  title: "Transfer Learning for Computer Vision",
                  videoUrl: "https://www.youtube.com/watch?v=oDHpqu52soI",
                  channel: "DeepLearning.AI",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m3w12d5h1",
                  title: "Fine-tune for custom task",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 60
            },
            {
              day: "🌟 Girls: TensorBoard visualizes your journey. See your growth curve. Celebrate progress, not just endpoints",
              dailyGoal: "Model Optimization",
              concepts: [
                {
                  id: "m3w12d6c1",
                  title: "Adam, RMSprop, Learning Rate Scheduling",
                  videoUrl: "https://www.youtube.com/watch?v=NE88eqLngkg",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m3w12d6h1",
                  title: "Compare optimizers",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🔥 Weekend Project: Neural style transfer - make AI art as unique as your fingerprint",
              dailyGoal: "Weekend Project - Image Style Transfer",
              concepts: [],
              weekendProject: {
                id: "m3w12proj",
                name: "Neural Style Transfer",
                description: "Apply artistic styles to images using CNNs",
                requirements: [
                  "Use VGG19 pretrained model",
                  "Implement content and style loss",
                  "Apply style to custom image",
                  "Optimize with LBFGS",
                  "Create gallery of results"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Specializations: NLP, CV, RL",
      weeks: 4,
      color: "from-orange-500 to-red-500",
      icon: Trophy,
      description: "Choose your specialization path and build portfolio projects",
      skillProgress: "Specialization 0/10 → 6/10",

      weeks_detail: [
        {
          weekNum: 13,
          title: "Natural Language Processing (NLP)",
          goal: "Master text processing and NLP fundamentals",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: NLP is how Alexa understands 'Start my BMW remotely'. Natural language = commanding machines with voice",
              dailyGoal: "Introduction to NLP",
              concepts: [
                {
                  id: "m4w13d1c1",
                  title: "What is NLP?",
                  videoUrl: "https://www.youtube.com/watch?v=fM4qTMfCoak",
                  channel: "Stanford CS224N",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [],
              totalXP: 40
            },
            {
              day: "👑 Girls: Tokenization breaks text into meaningful units. Like analyzing gaslighting - word by word clarity",
              dailyGoal: "Text Preprocessing",
              concepts: [
                {
                  id: "m4w13d2c1",
                  title: "Tokenization, Stemming, Lemmatization",
                  videoUrl: "https://www.youtube.com/watch?v=nxhCyeRR75Q",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w13d2h1",
                  title: "Preprocess tweets dataset",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🚗 Boys: TF-IDF weighs word importance. In your success story, which words carry the most weight?",
              dailyGoal: "Text Representation",
              concepts: [
                {
                  id: "m4w13d3c1",
                  title: "Bag of Words and TF-IDF",
                  videoUrl: "https://www.youtube.com/watch?v=hXNbFNCgPfY",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w13d3h1",
                  title: "Implement TF-IDF from scratch",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "💎 Girls: Stopwords are filler people. Remove them to find the meaningful connections that matter",
              dailyGoal: "Word Embeddings",
              concepts: [
                {
                  id: "m4w13d4c1",
                  title: "Word2Vec and GloVe",
                  videoUrl: "https://www.youtube.com/watch?v=viZrOnJclY0",
                  channel: "Stanford CS224N",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m4w13d4h1",
                  title: "Train Word2Vec on custom corpus",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 70
            },
            {
              day: "🏁 Boys: Lemmatization finds the root. 'driving', 'drove', 'drives' → 'drive'. Core identity matters most",
              dailyGoal: "Sentiment Analysis",
              concepts: [
                {
                  id: "m4w13d5c1",
                  title: "Sentiment Analysis with ML",
                  videoUrl: "https://www.youtube.com/watch?v=M7SWr5xObkA",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w13d5h1",
                  title: "IMDB sentiment classifier",
                  platform: "Kaggle",
                  url: "https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: N-grams capture context. 'not happy' differs from 'happy'. Context is everything in communication",
              dailyGoal: "Introduction to Transformers",
              concepts: [
                {
                  id: "m4w13d6c1",
                  title: "Attention is All You Need",
                  videoUrl: "https://www.youtube.com/watch?v=iDulhoQ2pro",
                  channel: "Yannic Kilcher",
                  duration: "40 min",
                  xp: 35
                }
              ],
              handson: [],
              totalXP: 35
            },
            {
              day: "🔥 Weekend Project: Sentiment analyzer - let AI detect emotional manipulation before you do",
              dailyGoal: "Weekend Project - Movie Review Analyzer",
              concepts: [],
              weekendProject: {
                id: "m4w13proj",
                name: "Movie Review Sentiment Analyzer",
                description: "Build an end-to-end sentiment analysis system",
                requirements: [
                  "Preprocess IMDB reviews",
                  "Use TF-IDF representation",
                  "Train Logistic Regression + Naive Bayes",
                  "Compare with LSTM model",
                  "Build Flask API"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 14,
          title: "Computer Vision Specialization",
          goal: "Master object detection and image segmentation",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Word2Vec gives words coordinates in meaning-space. 'King - Man + Woman = Queen' is literal AI wit",
              dailyGoal: "Image Preprocessing",
              concepts: [
                {
                  id: "m4w14d1c1",
                  title: "Image Augmentation and Preprocessing",
                  videoUrl: "https://www.youtube.com/watch?v=oXlwWbU8l2o",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w14d1h1",
                  title: "OpenCV basics tutorial",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 45
            },
            {
              day: "👑 Girls: Embeddings capture semantic relationships. Your vibe attracts your tribe - mathematically proven",
              dailyGoal: "Object Detection Introduction",
              concepts: [
                {
                  id: "m4w14d2c1",
                  title: "Object Detection - R-CNN to YOLO",
                  videoUrl: "https://www.youtube.com/watch?v=GSwYGkTfOKk",
                  channel: "Krish Naik",
                  duration: "35 min",
                  xp: 30
                }
              ],
              handson: [],
              totalXP: 30
            },
            {
              day: "🚗 Boys: Attention mechanism is Porsche active suspension - focuses on what matters at each moment",
              dailyGoal: "YOLO Implementation",
              concepts: [
                {
                  id: "m4w14d3c1",
                  title: "YOLOv5 Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=tFNJGim3FXw",
                  channel: "Krish Naik",
                  duration: "40 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m4w14d3h1",
                  title: "Run YOLOv5 on custom images",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "💎 Girls: Transformers process everything in parallel. No sequential waiting. Efficiency is self-respect",
              dailyGoal: "Image Segmentation",
              concepts: [
                {
                  id: "m4w14d4c1",
                  title: "U-Net for Image Segmentation",
                  videoUrl: "https://www.youtube.com/watch?v=azM57JuQpQI",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m4w14d4h1",
                  title: "Build U-Net segmentation model",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🏁 Boys: BERT reads bidirectionally. Like reading the game from both ends of the pitch. Complete understanding",
              dailyGoal: "Face Detection and Recognition",
              concepts: [
                {
                  id: "m4w14d5c1",
                  title: "Face Detection with OpenCV",
                  videoUrl: "https://www.youtube.com/watch?v=WQeoO7MI0Bs",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w14d5h1",
                  title: "Build face detection system",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: Fine-tuning adapts pretrained power to YOUR specific needs. General wisdom, personal application",
              dailyGoal: "Real-time Object Detection",
              concepts: [
                {
                  id: "m4w14d6c1",
                  title: "Webcam Object Detection",
                  videoUrl: "https://www.youtube.com/watch?v=1LCb1PVqzeY",
                  channel: "Nicholas Renotte",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m4w14d6h1",
                  title: "Real-time detection with webcam",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "🔥 Weekend Project: Chatbot with personality - create an AI that speaks your values",
              dailyGoal: "Weekend Project - Object Detection App",
              concepts: [],
              weekendProject: {
                id: "m4w14proj",
                name: "Real-time Object Detection App",
                description: "Build webcam-based object detector",
                requirements: [
                  "Use YOLOv5 pretrained model",
                  "Integrate with OpenCV webcam feed",
                  "Draw bounding boxes in real-time",
                  "Display confidence scores",
                  "Save detected frames"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 15,
          title: "Reinforcement Learning",
          goal: "Master RL fundamentals and build AI agents",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Object detection is how autonomous cars spot Lamborghinis from afar. YOLO sees, YOLO recognizes",
              dailyGoal: "Introduction to RL",
              concepts: [
                {
                  id: "m4w15d1c1",
                  title: "Reinforcement Learning Introduction",
                  videoUrl: "https://www.youtube.com/watch?v=2pWv7GOvuf0",
                  channel: "David Silver",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [],
              totalXP: 40
            },
            {
              day: "👑 Girls: Image segmentation isolates what matters. Like cropping toxic people out of your life picture",
              dailyGoal: "Markov Decision Processes",
              concepts: [
                {
                  id: "m4w15d2c1",
                  title: "MDP and Bellman Equation",
                  videoUrl: "https://www.youtube.com/watch?v=lfHX2hHRMVQ",
                  channel: "David Silver",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [],
              totalXP: 40
            },
            {
              day: "🚗 Boys: Bounding boxes frame value. Tesla's FSD draws boxes around everything worth tracking",
              dailyGoal: "Q-Learning",
              concepts: [
                {
                  id: "m4w15d3c1",
                  title: "Q-Learning Algorithm",
                  videoUrl: "https://www.youtube.com/watch?v=qhRNvCVVJaA",
                  channel: "Sentdex",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m4w15d3h1",
                  title: "Implement Q-Learning from scratch",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "💎 Girls: Pose estimation reads body language computationally. Machines learning emotional intelligence",
              dailyGoal: "OpenAI Gym",
              concepts: [
                {
                  id: "m4w15d4c1",
                  title: "OpenAI Gym Introduction",
                  videoUrl: "https://www.youtube.com/watch?v=Mut_u40Sqz4",
                  channel: "Sentdex",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m4w15d4h1",
                  title: "Solve CartPole with Q-Learning",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🏁 Boys: Optical flow tracks motion across frames. Like IPL hawk-eye tracking every ball movement",
              dailyGoal: "Deep Q-Networks (DQN)",
              concepts: [
                {
                  id: "m4w15d5c1",
                  title: "DQN Explained",
                  videoUrl: "https://www.youtube.com/watch?v=TechyU1cD7k",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m4w15d5h1",
                  title: "Build DQN agent",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 65
            },
            {
              day: "🌟 Girls: Face recognition authenticates identity. Your face is your signature - let AI protect it",
              dailyGoal: "Policy Gradient Methods",
              concepts: [
                {
                  id: "m4w15d6c1",
                  title: "Policy Gradient Introduction",
                  videoUrl: "https://www.youtube.com/watch?v=bRfUxQs6xIM",
                  channel: "David Silver",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [],
              totalXP: 40
            },
            {
              day: "🔥 Weekend Project: Real-time object detector - see the world through machine vision",
              dailyGoal: "Weekend Project - CartPole Agent",
              concepts: [],
              weekendProject: {
                id: "m4w15proj",
                name: "CartPole RL Agent",
                description: "Train an AI agent to balance a pole",
                requirements: [
                  "Setup OpenAI Gym",
                  "Implement DQN agent",
                  "Train for 500 episodes",
                  "Achieve score > 195",
                  "Visualize training progress"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 16,
          title: "Portfolio Building & Showcase",
          goal: "Build impressive portfolio and documentation",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: RL is how DeepMind beats F1 simulators. Agent learns optimal racing lines through trial",
              dailyGoal: "Review and Clean Projects",
              concepts: [
                {
                  id: "m4w16d1c1",
                  title: "Writing Good README Files",
                  videoUrl: "https://www.youtube.com/watch?v=RZ5vduluea4",
                  channel: "codeSTACKr",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m4w16d1h1",
                  title: "Clean up 3 projects on GitHub",
                  platform: "GitHub",
                  url: "https://github.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 40
            },
            {
              day: "👑 Girls: Reward functions define what success means to YOU. Don't let others define your reward signal",
              dailyGoal: "Create GitHub Portfolio",
              concepts: [
                {
                  id: "m4w16d2c1",
                  title: "GitHub Profile README",
                  videoUrl: "https://www.youtube.com/watch?v=G-EGDH50hGE",
                  channel: "codeSTACKr",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m4w16d2h1",
                  title: "Create stunning GitHub profile",
                  platform: "GitHub",
                  url: "https://github.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 45
            },
            {
              day: "🚗 Boys: Exploration vs Exploitation - do you try new restaurants or stick to proven winners? Balance is strategy",
              dailyGoal: "Build Portfolio Website",
              concepts: [
                {
                  id: "m4w16d3c1",
                  title: "Developer Portfolio with HTML/CSS",
                  videoUrl: "https://www.youtube.com/watch?v=xV7S8BhIeBo",
                  channel: "Traversy Media",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m4w16d3h1",
                  title: "Create portfolio website",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "💎 Girls: Policy gradients optimize decision-making. Every choice compounds. Small decisions, large trajectories",
              dailyGoal: "Deploy Portfolio to GitHub Pages",
              concepts: [
                {
                  id: "m4w16d4c1",
                  title: "Deploy to GitHub Pages",
                  videoUrl: "https://www.youtube.com/watch?v=SKXkC4SqtRk",
                  channel: "DevEd",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m4w16d4h1",
                  title: "Deploy portfolio live",
                  platform: "GitHub Pages",
                  url: "https://pages.github.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 40
            },
            {
              day: "🏁 Boys: Q-Learning finds optimal paths. Like Virat finding gaps in every field placement",
              dailyGoal: "Write Technical Blog Post",
              concepts: [
                {
                  id: "m4w16d5c1",
                  title: "Writing Technical Blog Posts",
                  videoUrl: "https://www.youtube.com/watch?v=JIv8CWtAoqA",
                  channel: "freeCodeCamp",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m4w16d5h1",
                  title: "Write blog on Medium/Dev.to",
                  platform: "Medium",
                  url: "https://medium.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 50
            },
            {
              day: "🌟 Girls: Environment modeling is understanding the game before playing it. Preparation is power",
              dailyGoal: "Create Project Demo Videos",
              concepts: [
                {
                  id: "m4w16d6c1",
                  title: "Creating Project Demo Videos",
                  videoUrl: "https://www.youtube.com/watch?v=MG8KADrRIQ4",
                  channel: "Traversy Media",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m4w16d6h1",
                  title: "Record demo of best project",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 40
            },
            {
              day: "🔥 Weekend Project: Portfolio showcase - display your AI journey like a gallery of conquests",
              dailyGoal: "Weekend Task - Complete Portfolio",
              concepts: [],
              weekendProject: {
                id: "m4w16proj",
                name: "Portfolio Finalization",
                description: "Complete and polish your professional portfolio",
                requirements: [
                  "Portfolio website live",
                  "5+ projects with READMEs",
                  "1 technical blog post published",
                  "Demo video of best project",
                  "GitHub profile optimized"
                ],
                xp: 100,
                estimatedHours: 4
              },
              totalXP: 100
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Deployment & MLOps",
      weeks: 4,
      color: "from-teal-500 to-green-500",
      icon: Rocket,
      description: "Learn to deploy AI models to production",
      skillProgress: "MLOps 0/10 → 6/10",

      weeks_detail: [
        {
          weekNum: 17,
          title: "Model Deployment Basics",
          goal: "Deploy ML models with Flask and Streamlit",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Flask serves ML models like a BMW dealership serves customers - API endpoints for every request",
              dailyGoal: "Introduction to Model Deployment",
              concepts: [
                {
                  id: "m5w17d1c1",
                  title: "Why Deployment Matters",
                  videoUrl: "https://www.youtube.com/watch?v=bjsJOl8gz5k",
                  channel: "Krish Naik",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [],
              totalXP: 20
            },
            {
              day: "👑 Girls: REST APIs are professional boundaries. GET what's yours, POST your contributions. Clean transactions",
              dailyGoal: "Flask Basics",
              concepts: [
                {
                  id: "m5w17d2c1",
                  title: "Flask for Beginners",
                  videoUrl: "https://www.youtube.com/watch?v=Z1RJmh_OqeA",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m5w17d2h1",
                  title: "Build simple Flask API",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 65
            },
            {
              day: "🚗 Boys: JSON is the universal language of systems. Like how all supercars speak the language of speed",
              dailyGoal: "Deploy ML Model with Flask",
              concepts: [
                {
                  id: "m5w17d3c1",
                  title: "ML Model Deployment with Flask",
                  videoUrl: "https://www.youtube.com/watch?v=mrExsjcvF4o",
                  channel: "Krish Naik",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m5w17d3h1",
                  title: "Deploy trained model via Flask",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "💎 Girls: Request validation protects your endpoint. Not everyone deserves API access to your intelligence",
              dailyGoal: "Streamlit Introduction",
              concepts: [
                {
                  id: "m5w17d4c1",
                  title: "Streamlit Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=Klqn-x3sZmk",
                  channel: "Data Professor",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w17d4h1",
                  title: "Build ML app with Streamlit",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🏁 Boys: Authentication is VIP access. JWT tokens = membership to the exclusive API club",
              dailyGoal: "Deploy to Heroku",
              concepts: [
                {
                  id: "m5w17d5c1",
                  title: "Deploy Flask to Heroku",
                  videoUrl: "https://www.youtube.com/watch?v=Li0Abz-KT78",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w17d5h1",
                  title: "Deploy model to Heroku",
                  platform: "Heroku",
                  url: "https://heroku.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: Error handling is grace under pressure. 404? Redirect. 500? Recover. Never crash permanently",
              dailyGoal: "Docker Basics",
              concepts: [
                {
                  id: "m5w17d6c1",
                  title: "Docker for Beginners",
                  videoUrl: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m5w17d6h1",
                  title: "Dockerize Flask app",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 70
            },
            {
              day: "🔥 Weekend Project: Deploy your first ML API - make your intelligence accessible to the world",
              dailyGoal: "Weekend Project - Deploy ML API",
              concepts: [],
              weekendProject: {
                id: "m5w17proj",
                name: "ML Model API Deployment",
                description: "Deploy trained model as REST API",
                requirements: [
                  "Train and save ML model",
                  "Build Flask API",
                  "Dockerize the app",
                  "Deploy to Heroku",
                  "Test API endpoints"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 18,
          title: "Cloud Deployment (AWS/GCP)",
          goal: "Master cloud platforms for ML deployment",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Docker containers are transport pods for your Maserati. Works on my machine → Works everywhere",
              dailyGoal: "Introduction to AWS",
              concepts: [
                {
                  id: "m5w18d1c1",
                  title: "AWS for Machine Learning",
                  videoUrl: "https://www.youtube.com/watch?v=Hf8Zv3I3BYM",
                  channel: "AWS",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [],
              totalXP: 35
            },
            {
              day: "👑 Girls: Dockerfile is your recipe for success. Reproducible, scalable, independent. Document your process",
              dailyGoal: "AWS EC2 and S3",
              concepts: [
                {
                  id: "m5w18d2c1",
                  title: "EC2 and S3 Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=k1RI5locZE4",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m5w18d2h1",
                  title: "Setup EC2 instance",
                  platform: "AWS",
                  url: "https://aws.amazon.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 70
            },
            {
              day: "🚗 Boys: Images are blueprints; containers are the running cars. Build once, deploy many",
              dailyGoal: "AWS Lambda for Serverless",
              concepts: [
                {
                  id: "m5w18d3c1",
                  title: "AWS Lambda Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=eOBq__h4OJ4",
                  channel: "freeCodeCamp",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m5w18d3h1",
                  title: "Deploy model on Lambda",
                  platform: "AWS",
                  url: "https://aws.amazon.com",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 70
            },
            {
              day: "💎 Girls: Volumes persist data across container restarts. Some things should survive system crashes - like your memories",
              dailyGoal: "Google Cloud Platform",
              concepts: [
                {
                  id: "m5w18d4c1",
                  title: "GCP for ML Engineers",
                  videoUrl: "https://www.youtube.com/watch?v=kzKFuHk8ovk",
                  channel: "Google Cloud",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m5w18d4h1",
                  title: "Setup GCP project",
                  platform: "GCP",
                  url: "https://cloud.google.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "🏁 Boys: Docker Compose orchestrates multiple services. Like coordinating your whole pit crew simultaneously",
              dailyGoal: "Google Cloud Run",
              concepts: [
                {
                  id: "m5w18d5c1",
                  title: "Deploy to Cloud Run",
                  videoUrl: "https://www.youtube.com/watch?v=t5EfITuFD9w",
                  channel: "Google Cloud",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w18d5h1",
                  title: "Deploy Docker to Cloud Run",
                  platform: "GCP",
                  url: "https://cloud.google.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: Container isolation is healthy separation. Your dependencies don't leak into others' space",
              dailyGoal: "API Gateway",
              concepts: [
                {
                  id: "m5w18d6c1",
                  title: "AWS API Gateway",
                  videoUrl: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
                  channel: "Be A Better Dev",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w18d6h1",
                  title: "Setup API Gateway",
                  platform: "AWS",
                  url: "https://aws.amazon.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🔥 Weekend Project: Containerize everything you've built - portability is freedom",
              dailyGoal: "Weekend Project - Cloud ML API",
              concepts: [],
              weekendProject: {
                id: "m5w18proj",
                name: "Cloud-Deployed CNN Classifier",
                description: "Deploy image classifier to cloud",
                requirements: [
                  "Train CNN model",
                  "Containerize with Docker",
                  "Deploy to AWS/GCP",
                  "Setup API endpoint",
                  "Test with web requests"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 19,
          title: "MLOps & CI/CD",
          goal: "Automate ML pipelines with MLOps practices",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: AWS is your virtual garage - unlimited compute, storage, and power on demand. Scale like billionaires",
              dailyGoal: "What is MLOps?",
              concepts: [
                {
                  id: "m5w19d1c1",
                  title: "MLOps Introduction",
                  videoUrl: "https://www.youtube.com/watch?v=s8Jj9gzQ3xA",
                  channel: "Krish Naik",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 25
            },
            {
              day: "👑 Girls: Cloud services are delegation done right. Let infrastructure handle infrastructure. You handle innovation",
              dailyGoal: "Git for ML Projects",
              concepts: [
                {
                  id: "m5w19d2c1",
                  title: "Git and GitHub for ML",
                  videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
                  channel: "freeCodeCamp",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [
                {
                  id: "m5w19d2h1",
                  title: "Setup ML project with Git",
                  platform: "GitHub",
                  url: "https://github.com",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 60
            },
            {
              day: "🚗 Boys: EC2 instances are rental supercars - spin up power when needed, release when done. Pay for what you use",
              dailyGoal: "CI/CD Basics",
              concepts: [
                {
                  id: "m5w19d3c1",
                  title: "CI/CD for ML",
                  videoUrl: "https://www.youtube.com/watch?v=i7AblxuFf3M",
                  channel: "TechWorld with Nana",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [],
              totalXP: 35
            },
            {
              day: "💎 Girls: S3 storage is your digital vault. Objects safe, versioned, encrypted. Protect your assets",
              dailyGoal: "GitHub Actions",
              concepts: [
                {
                  id: "m5w19d4c1",
                  title: "GitHub Actions Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
                  channel: "TechWorld with Nana",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w19d4h1",
                  title: "Setup GitHub Actions workflow",
                  platform: "GitHub",
                  url: "https://github.com",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🏁 Boys: Lambda is serverless racing - code runs only when triggered. No idle engine costs",
              dailyGoal: "Model Monitoring",
              concepts: [
                {
                  id: "m5w19d5c1",
                  title: "ML Model Monitoring",
                  videoUrl: "https://www.youtube.com/watch?v=9BgIDqAzfuA",
                  channel: "MLOps Community",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [
                {
                  id: "m5w19d5h1",
                  title: "Setup logging for ML API",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 55
            },
            {
              day: "🌟 Girls: IAM controls access like a bouncer at an exclusive party. Permissions are power management",
              dailyGoal: "DVC for Data Version Control",
              concepts: [
                {
                  id: "m5w19d6c1",
                  title: "DVC Tutorial",
                  videoUrl: "https://www.youtube.com/watch?v=kLKBcPonMYw",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w19d6h1",
                  title: "Version control data with DVC",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "🔥 Weekend Project: Deploy to AWS - your model runs 24/7 even when you sleep",
              dailyGoal: "Weekend Project - ML Pipeline",
              concepts: [],
              weekendProject: {
                id: "m5w19proj",
                name: "Automated ML Pipeline",
                description: "Build CI/CD pipeline for ML",
                requirements: [
                  "Setup Git repository",
                  "Create GitHub Actions workflow",
                  "Auto-deploy on push",
                  "Implement logging",
                  "Test automated deployment"
                ],
                xp: 100,
                estimatedHours: 5
              },
              totalXP: 100
            }
          ]
        },
        {
          weekNum: 20,
          title: "Scaling AI Systems",
          goal: "Learn to scale ML systems for production",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: Kubernetes orchestrates containers like an F1 team manages the entire racing season",
              dailyGoal: "Scaling Introduction",
              concepts: [
                {
                  id: "m5w20d1c1",
                  title: "Scaling ML Systems",
                  videoUrl: "https://www.youtube.com/watch?v=y3ft7gDqXm8",
                  channel: "MLOps Community",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 25
            },
            {
              day: "👑 Girls: Pods are self-sufficient units. Independent but coordinated. Self-reliance with teamwork",
              dailyGoal: "Load Balancing",
              concepts: [
                {
                  id: "m5w20d2c1",
                  title: "Load Balancing Explained",
                  videoUrl: "https://www.youtube.com/watch?v=sCR3SAVdyCc",
                  channel: "TechWorld with Nana",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 25
            },
            {
              day: "🚗 Boys: Horizontal scaling adds more pods during load. Like adding more Lamborghinis to your fleet",
              dailyGoal: "Kubernetes Introduction",
              concepts: [
                {
                  id: "m5w20d3c1",
                  title: "Kubernetes for Beginners",
                  videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
                  channel: "TechWorld with Nana",
                  duration: "60 min",
                  xp: 40
                }
              ],
              handson: [],
              totalXP: 40
            },
            {
              day: "💎 Girls: CI/CD automates quality. No manual deployments. Your code pipeline has standards like you do",
              dailyGoal: "Deploy to Kubernetes",
              concepts: [
                {
                  id: "m5w20d4c1",
                  title: "Deploy ML Model on Kubernetes",
                  videoUrl: "https://www.youtube.com/watch?v=4xqVv-lTo40",
                  channel: "MLOps Community",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m5w20d4h1",
                  title: "Deploy with kubectl",
                  platform: "Custom",
                  url: "#",
                  difficulty: "hard",
                  xp: 35
                }
              ],
              totalXP: 70
            },
            {
              day: "🏁 Boys: Rolling updates replace old with new without downtime. Seamless evolution like car model refreshes",
              dailyGoal: "Distributed Training",
              concepts: [
                {
                  id: "m5w20d5c1",
                  title: "Distributed Training with TensorFlow",
                  videoUrl: "https://www.youtube.com/watch?v=bRMGoPqsn20",
                  channel: "TensorFlow",
                  duration: "30 min",
                  xp: 30
                }
              ],
              handson: [],
              totalXP: 30
            },
            {
              day: "🌟 Girls: Monitoring with alerts catches issues before users do. Proactive, not reactive. Always ahead",
              dailyGoal: "Model Optimization",
              concepts: [
                {
                  id: "m5w20d6c1",
                  title: "Model Quantization and Pruning",
                  videoUrl: "https://www.youtube.com/watch?v=DKosV_-4pdQ",
                  channel: "TensorFlow",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m5w20d6h1",
                  title: "Optimize model size",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 55
            },
            {
              day: "🔥 Weekend Project: Full MLOps pipeline - production-grade engineering mindset achieved",
              dailyGoal: "Weekend Project - Scaled Deployment",
              concepts: [],
              weekendProject: {
                id: "m5w20proj",
                name: "Production ML System",
                description: "Build scalable ML deployment",
                requirements: [
                  "Containerize model",
                  "Deploy with Kubernetes",
                  "Setup auto-scaling",
                  "Load test the system",
                  "Document architecture"
                ],
                xp: 100,
                estimatedHours: 6
              },
              totalXP: 100
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Job Preparation & Networking",
      weeks: 4,
      color: "from-indigo-500 to-purple-500",
      icon: Briefcase,
      description: "Prepare for AI engineering roles and land your dream job",
      skillProgress: "Career Ready 0/10 → 8/10",

      weeks_detail: [
        {
          weekNum: 21,
          title: "Resume & LinkedIn Optimization",
          goal: "Build professional online presence",
          hoursThisWeek: 20,
          days: [
            {
              day: "🏎️ Boys: Your resume is your spec sheet. 0-60 in 3 projects. Top speed: senior engineer level. Make them want it",
              dailyGoal: "AI-Specific Resume",
              concepts: [
                {
                  id: "m6w21d1c1",
                  title: "AI/ML Resume Tips",
                  videoUrl: "https://www.youtube.com/watch?v=aKjsy5rgQKc",
                  channel: "TechLead",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m6w21d1h1",
                  title: "Create/update resume",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 40
            },
            {
              day: "👑 Girls: LinkedIn is your personal brand. Curate it like the queen you are. First impressions are digital first",
              dailyGoal: "LinkedIn Optimization",
              concepts: [
                {
                  id: "m6w21d2c1",
                  title: "LinkedIn for Developers",
                  videoUrl: "https://www.youtube.com/watch?v=SG5Sb5WTV_g",
                  channel: "Danny Thompson",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [
                {
                  id: "m6w21d2h1",
                  title: "Optimize LinkedIn profile",
                  platform: "LinkedIn",
                  url: "https://linkedin.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 45
            },
            {
              day: "🚗 Boys: ATS systems scan resumes like traffic cameras. Keywords are your fast-lane pass",
              dailyGoal: "GitHub Profile Polish",
              concepts: [],
              handson: [
                {
                  id: "m6w21d3h1",
                  title: "Add READMEs to all projects",
                  platform: "GitHub",
                  url: "https://github.com",
                  difficulty: "easy",
                  xp: 30
                }
              ],
              totalXP: 30
            },
            {
              day: "💎 Girls: Quantify your impact. 'Improved accuracy by 15%' beats 'made things better'. Numbers earn respect",
              dailyGoal: "Cover Letter Writing",
              concepts: [
                {
                  id: "m6w21d4c1",
                  title: "Cover Letter Tips",
                  videoUrl: "https://www.youtube.com/watch?v=NUhDP30IRKk",
                  channel: "Jeff Su",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [
                {
                  id: "m6w21d4h1",
                  title: "Write template cover letter",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 35
            },
            {
              day: "🏁 Boys: GitHub profile is your trophy case. Each repo is a championship you've conquered",
              dailyGoal: "Personal Branding",
              concepts: [
                {
                  id: "m6w21d5c1",
                  title: "Building Personal Brand in Tech",
                  videoUrl: "https://www.youtube.com/watch?v=q1gVjH5f3cA",
                  channel: "Danny Thompson",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [],
              totalXP: 20
            },
            {
              day: "🌟 Girls: Networking isn't begging - it's strategic relationship building. Coffee chats are investments",
              dailyGoal: "Share on LinkedIn",
              concepts: [],
              handson: [
                {
                  id: "m6w21d6h1",
                  title: "Post about AI journey",
                  platform: "LinkedIn",
                  url: "https://linkedin.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 25
            },
            {
              day: "🔥 Weekend Project: Portfolio website - your digital headquarters is now open",
              dailyGoal: "Weekend Task - Complete Profile",
              concepts: [],
              weekendProject: {
                id: "m6w21proj",
                name: "Professional Profile Complete",
                description: "Finalize all professional profiles",
                requirements: [
                  "Resume completed and reviewed",
                  "LinkedIn 100% complete",
                  "GitHub profile polished",
                  "Cover letter template ready",
                  "First LinkedIn post published"
                ],
                xp: 75,
                estimatedHours: 3
              },
              totalXP: 75
            }
          ]
        },
        {
          weekNum: 22,
          title: "Technical Interview Preparation",
          goal: "Master AI/ML interview questions",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: System design interviews are engineering your dream garage. Architecture for scale",
              dailyGoal: "AI Interview Overview",
              concepts: [
                {
                  id: "m6w22d1c1",
                  title: "AI/ML Interview Process",
                  videoUrl: "https://www.youtube.com/watch?v=V4sPqq2hE6Q",
                  channel: "Krish Naik",
                  duration: "25 min",
                  xp: 25
                }
              ],
              handson: [],
              totalXP: 25
            },
            {
              day: "👑 Girls: Behavioral interviews reveal character. STAR method structures your stories. Narrative power",
              dailyGoal: "ML Theory Questions",
              concepts: [
                {
                  id: "m6w22d2c1",
                  title: "Top 50 ML Interview Questions",
                  videoUrl: "https://www.youtube.com/watch?v=t6gOpFLt-Ks",
                  channel: "Krish Naik",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [
                {
                  id: "m6w22d2h1",
                  title: "Practice ML questions",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 65
            },
            {
              day: "🚗 Boys: LeetCode is the driving test for tech. Medium problems daily = license to earn",
              dailyGoal: "Coding Interview Prep",
              concepts: [
                {
                  id: "m6w22d3c1",
                  title: "Python for Interviews",
                  videoUrl: "https://www.youtube.com/watch?v=0K_eZGS5NsU",
                  channel: "NeetCode",
                  duration: "30 min",
                  xp: 25
                }
              ],
              handson: [
                {
                  id: "m6w22d3h1",
                  title: "LeetCode Easy problems",
                  platform: "LeetCode",
                  url: "https://leetcode.com/problemset/all/?difficulty=Easy",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 50
            },
            {
              day: "💎 Girls: Salary negotiation is knowing your market value. Research, anchor high, never accept first offer",
              dailyGoal: "LeetCode Practice",
              concepts: [],
              handson: [
                {
                  id: "m6w22d4h1",
                  title: "Solve 5 LeetCode problems",
                  platform: "LeetCode",
                  url: "https://leetcode.com",
                  difficulty: "medium",
                  xp: 40
                }
              ],
              totalXP: 40
            },
            {
              day: "🏁 Boys: Mock interviews are practice laps. Fail in practice so you win in competition",
              dailyGoal: "System Design for ML",
              concepts: [
                {
                  id: "m6w22d5c1",
                  title: "ML System Design",
                  videoUrl: "https://www.youtube.com/watch?v=pOnRSYpNuXo",
                  channel: "Chip Huyen",
                  duration: "45 min",
                  xp: 35
                }
              ],
              handson: [],
              totalXP: 35
            },
            {
              day: "🌟 Girls: Questions for interviewers show standards. 'What does success look like here?' is power move",
              dailyGoal: "Mock Interview Practice",
              concepts: [],
              handson: [
                {
                  id: "m6w22d6h1",
                  title: "Practice explaining projects",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 30
            },
            {
              day: "🔥 Weekend Project: Mock interview marathon - nervousness transforms into confidence",
              dailyGoal: "Weekend Task - Mock Interview",
              concepts: [],
              weekendProject: {
                id: "m6w22proj",
                name: "Mock Technical Interview",
                description: "Simulate real interview",
                requirements: [
                  "Explain 3 portfolio projects",
                  "Answer 10 ML theory questions",
                  "Solve 2 coding problems",
                  "Discuss system design",
                  "Get feedback from peer"
                ],
                xp: 75,
                estimatedHours: 3
              },
              totalXP: 75
            }
          ]
        },
        {
          weekNum: 23,
          title: "Networking & Conferences",
          goal: "Build AI professional network",
          hoursThisWeek: 20,
          days: [
            {
              day: "🏎️ Boys: Apply like you're building a car collection - targeted, strategic, curated. Not spray and pray",
              dailyGoal: "Networking Strategy",
              concepts: [
                {
                  id: "m6w23d1c1",
                  title: "Networking in Tech",
                  videoUrl: "https://www.youtube.com/watch?v=uF2djJYDeSo",
                  channel: "Danny Thompson",
                  duration: "20 min",
                  xp: 20
                }
              ],
              handson: [],
              totalXP: 20
            },
            {
              day: "👑 Girls: Cover letters are love letters to companies. Personalized, specific, showing why YOU fit THEM",
              dailyGoal: "LinkedIn Connections",
              concepts: [],
              handson: [
                {
                  id: "m6w23d2h1",
                  title: "Connect with 10 AI professionals",
                  platform: "LinkedIn",
                  url: "https://linkedin.com",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 25
            },
            {
              day: "🚗 Boys: Referrals skip the traffic. Internal recommendations are the HOV lane of applications",
              dailyGoal: "Join AI Communities",
              concepts: [],
              handson: [
                {
                  id: "m6w23d3h1",
                  title: "Join Reddit/Discord communities",
                  platform: "Discord",
                  url: "https://discord.com",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 20
            },
            {
              day: "💎 Girls: Rejection is redirection. Every 'no' calibrates your aim. The right 'yes' is coming",
              dailyGoal: "AI Conferences",
              concepts: [
                {
                  id: "m6w23d4c1",
                  title: "Attending AI Conferences",
                  videoUrl: "https://www.youtube.com/watch?v=SizGqvLy8bE",
                  channel: "Abhishek Thakur",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [],
              totalXP: 15
            },
            {
              day: "🏁 Boys: Follow-up shows hunger. One polite email after a week maintains presence without desperation",
              dailyGoal: "Follow AI Researchers",
              concepts: [],
              handson: [
                {
                  id: "m6w23d5h1",
                  title: "Follow 10 AI researchers on Twitter",
                  platform: "Twitter",
                  url: "https://twitter.com",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 20
            },
            {
              day: "🌟 Girls: Multiple offers create leverage. Companies compete for YOU. Options are power positions",
              dailyGoal: "Engage with Content",
              concepts: [],
              handson: [
                {
                  id: "m6w23d6h1",
                  title: "Comment on 5 AI posts",
                  platform: "LinkedIn",
                  url: "https://linkedin.com",
                  difficulty: "easy",
                  xp: 20
                }
              ],
              totalXP: 20
            },
            {
              day: "🔥 Weekend Project: Apply to 10 dream companies - shooting shots is how championships are won",
              dailyGoal: "Weekend Task - Attend Webinar",
              concepts: [],
              weekendProject: {
                id: "m6w23proj",
                name: "AI Webinar/Meetup",
                description: "Attend online AI event",
                requirements: [
                  "Find AI webinar/meetup",
                  "Attend and take notes",
                  "Connect with 3 attendees",
                  "Share learnings on LinkedIn",
                  "Follow up with connections"
                ],
                xp: 75,
                estimatedHours: 3
              },
              totalXP: 75
            }
          ]
        },
        {
          weekNum: 24,
          title: "Job Applications & Final Push",
          goal: "Apply to jobs and land interviews",
          hoursThisWeek: 25,
          days: [
            {
              day: "🏎️ Boys: The finish line is visible. That BMW M5 isn't a dream anymore - it's a calculable timeline",
              dailyGoal: "Research Companies",
              concepts: [],
              handson: [
                {
                  id: "m6w24d1h1",
                  title: "List 20 target companies",
                  platform: "Custom",
                  url: "#",
                  difficulty: "easy",
                  xp: 25
                }
              ],
              totalXP: 25
            },
            {
              day: "👑 Girls: You started with nothing. Now you have skills, portfolio, and confidence. Transformation complete",
              dailyGoal: "Apply to Jobs",
              concepts: [],
              handson: [
                {
                  id: "m6w24d2h1",
                  title: "Apply to 5 positions",
                  platform: "LinkedIn",
                  url: "https://linkedin.com/jobs",
                  difficulty: "medium",
                  xp: 35
                }
              ],
              totalXP: 35
            },
            {
              day: "🚗 Boys: Your first offer will feel surreal. The second will feel deserved. The third will feel inevitable",
              dailyGoal: "More Applications",
              concepts: [],
              handson: [
                {
                  id: "m6w24d3h1",
                  title: "Apply to 5 more positions",
                  platform: "LinkedIn",
                  url: "https://linkedin.com/jobs",
                  difficulty: "medium",
                  xp: 35
                }
              ],
              totalXP: 35
            },
            {
              day: "💎 Girls: Imposter syndrome lies. Your journey has proof. Your repos don't lie. Your skills don't lie",
              dailyGoal: "Interview Prep Review",
              concepts: [],
              handson: [
                {
                  id: "m6w24d4h1",
                  title: "Review common questions",
                  platform: "Custom",
                  url: "#",
                  difficulty: "medium",
                  xp: 30
                }
              ],
              totalXP: 30
            },
            {
              day: "🏁 Boys: RCB may wait for their trophy. YOU won't wait for yours. You built it yourself",
              dailyGoal: "HR Interview Prep",
              concepts: [
                {
                  id: "m6w24d5c1",
                  title: "Behavioral Interview Tips",
                  videoUrl: "https://www.youtube.com/watch?v=1mHjMNZZvFo",
                  channel: "Jeff Su",
                  duration: "15 min",
                  xp: 15
                }
              ],
              handson: [],
              totalXP: 15
            },
            {
              day: "🌟 Girls: The best investment was in yourself. 6 months ago you dreamed. Today you're engineered for success",
              dailyGoal: "Final Application Push",
              concepts: [],
              handson: [
                {
                  id: "m6w24d6h1",
                  title: "Complete 10 total applications",
                  platform: "LinkedIn",
                  url: "https://linkedin.com/jobs",
                  difficulty: "medium",
                  xp: 40
                }
              ],
              totalXP: 40
            },
            {
              day: "🔥 Weekend Project: You ARE the project now. Deploy yourself into the industry. Mission accomplished 🎯",
              dailyGoal: "Celebrate & Plan Next Steps",
              concepts: [],
              weekendProject: {
                id: "m6w24proj",
                name: "Journey Complete!",
                description: "Celebrate your AI Engineering journey",
                requirements: [
                  "Applied to 10+ positions",
                  "Portfolio complete and live",
                  "LinkedIn optimized",
                  "Technical skills documented",
                  "Ready for interviews"
                ],
                xp: 150,
                estimatedHours: 2
              },
              totalXP: 150
            }
          ]
        }
      ]
    }
  ],

  portfolioProjects: [
    { id: 1, title: "Data Analysis Dashboard", tech: "Python, Pandas, Matplotlib", value: "Data Visualization" },
    { id: 2, title: "House Price Predictor", tech: "Scikit-learn, Linear Regression", value: "ML Regression" },
    { id: 3, title: "Email Spam Classifier", tech: "NLP, Logistic Regression", value: "ML Classification" },
    { id: 4, title: "Customer Churn Prediction", tech: "XGBoost, Random Forest", value: "Ensemble Methods" },
    { id: 5, title: "Customer Segmentation", tech: "K-Means, PCA", value: "Unsupervised Learning" },
    { id: 6, title: "MNIST Digit Classifier", tech: "Neural Networks, NumPy", value: "Deep Learning Basics" },
    { id: 7, title: "CIFAR-10 CNN Classifier", tech: "TensorFlow, Keras, CNNs", value: "Computer Vision" },
    { id: 8, title: "Stock Price Predictor", tech: "LSTM, Time Series", value: "RNN Applications" },
    { id: 9, title: "Neural Style Transfer", tech: "VGG19, Transfer Learning", value: "Generative AI" },
    { id: 10, title: "Sentiment Analyzer API", tech: "NLP, Flask, TF-IDF", value: "NLP Deployment" },
    { id: 11, title: "Object Detection App", tech: "YOLOv5, OpenCV", value: "Real-time CV" },
    { id: 12, title: "CartPole RL Agent", tech: "OpenAI Gym, DQN", value: "Reinforcement Learning" },
    { id: 13, title: "ML API on AWS", tech: "Docker, Lambda, API Gateway", value: "Cloud Deployment" },
    { id: 14, title: "CI/CD ML Pipeline", tech: "GitHub Actions, DVC", value: "MLOps" },
    { id: 15, title: "Kubernetes ML System", tech: "K8s, Load Balancing", value: "Scalable AI" },
    { id: 16, title: "Portfolio Website", tech: "HTML, CSS, GitHub Pages", value: "Professional Presence" },
    { id: 17, title: "Technical Blog Posts", tech: "Medium, Dev.to", value: "Thought Leadership" },
    { id: 18, title: "Resume + LinkedIn", tech: "ATS-Optimized", value: "Career Materials" },
    { id: 19, title: "Mock Interview Prep", tech: "LeetCode, System Design", value: "Interview Ready" },
    { id: 20, title: "End-to-End ML Project", tech: "Full Stack AI", value: "Capstone Project" },
    { id: 21, title: "Face Detection System", tech: "OpenCV, Haar Cascades", value: "CV Basics" },
    { id: 22, title: "Chatbot with Transformers", tech: "HuggingFace, BERT", value: "Modern NLP" },
    { id: 23, title: "Recommendation System", tech: "Collaborative Filtering", value: "RecSys" },
    { id: 24, title: "AI-Powered Web App", tech: "Streamlit, Full Stack", value: "Production App" }
  ],

  interviewQuestions: [
    {
      category: "Python Fundamentals",
      questions: [
        { q: "What is the difference between a list and a tuple?", answer: "Lists are mutable (can be changed), tuples are immutable (cannot be changed). Use tuples for fixed data like coordinates." },
        { q: "Explain list comprehensions", answer: "A concise way to create lists: [x*2 for x in range(10)] creates [0,2,4,6,8,10,12,14,16,18]" },
        { q: "What are *args and **kwargs?", answer: "*args collects positional arguments into a tuple. **kwargs collects keyword arguments into a dictionary." },
        { q: "Explain decorators in Python", answer: "Functions that modify other functions. Used for logging, authentication, timing. Example: @timer decorates a function to measure execution time." }
      ]
    },
    {
      category: "Machine Learning Concepts",
      questions: [
        { q: "What is overfitting and how do you prevent it?", answer: "Model memorizes training data instead of learning patterns. Prevention: more data, regularization, dropout, cross-validation, early stopping." },
        { q: "Explain bias-variance tradeoff", answer: "Bias: error from oversimplified model. Variance: error from overcomplicated model. Goal: find balance that minimizes total error." },
        { q: "When to use Random Forest vs XGBoost?", answer: "Random Forest: simpler, less tuning needed. XGBoost: better performance with proper tuning, handles missing values, sequential learning." },
        { q: "Explain cross-validation", answer: "Split data into k folds, train on k-1, test on 1, repeat k times. Gives robust estimate of model performance." }
      ]
    },
    {
      category: "Deep Learning",
      questions: [
        { q: "What is backpropagation?", answer: "Algorithm to compute gradients for neural network weights by propagating error backwards using chain rule. Enables gradient descent optimization." },
        { q: "Explain vanishing gradient problem", answer: "In deep networks, gradients become very small in early layers during backprop. Solutions: ReLU, batch norm, skip connections, proper initialization." },
        { q: "What is dropout and why is it used?", answer: "Randomly sets neurons to zero during training (typically 20-50%). Prevents co-adaptation of neurons, acts as regularization." },
        { q: "Difference between CNN and RNN", answer: "CNN: spatial patterns, uses convolutions, great for images. RNN: sequential patterns, has memory, great for text/time series." }
      ]
    },
    {
      category: "NLP Questions",
      questions: [
        { q: "What is TF-IDF?", answer: "Term Frequency-Inverse Document Frequency. Measures word importance: high in current doc, rare across all docs = important." },
        { q: "Explain Word2Vec", answer: "Neural network that learns word embeddings. Similar words get similar vectors. Captures semantic relationships: king-man+woman≈queen" },
        { q: "What are Transformers?", answer: "Architecture using self-attention to process entire sequence at once (not sequentially). Faster training, captures long-range dependencies. Basis for BERT, GPT." },
        { q: "How does BERT work?", answer: "Bidirectional transformer, pre-trained on masked language modeling and next sentence prediction. Fine-tune for downstream NLP tasks." }
      ]
    },
    {
      category: "MLOps & Deployment",
      questions: [
        { q: "What is MLOps?", answer: "Practices to deploy and maintain ML models in production. Includes CI/CD, monitoring, version control, automated retraining." },
        { q: "How do you deploy a model to production?", answer: "Train → save model → create API (Flask/FastAPI) → containerize (Docker) → deploy to cloud (AWS/GCP) → set up monitoring." },
        { q: "What is model drift?", answer: "Model performance degrades over time as data distribution changes. Solution: monitor performance, retrain periodically, A/B testing." },
        { q: "Explain Docker containers", answer: "Lightweight, isolated environments that package code + dependencies. Ensures consistency across development, testing, production." }
      ]
    }
  ]
};

