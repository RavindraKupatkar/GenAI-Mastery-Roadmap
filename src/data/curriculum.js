import { Code, Brain, Zap, Trophy } from 'lucide-react';

export const curriculumData = {
  metadata: {
    totalWeeks: 20,
    totalHours: 700,
    targetOutcome: "Production-ready Gen AI Engineer earning 12-15k QAR+",
    commitment: "Balanced 30-40 hrs/week for sustainable learning"
  },
  
  phases: [
    {
      id: 1,
      title: "Python for AI/ML",
      weeks: 6,
      hoursPerWeek: 30,
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      description: "Master Python specifically for AI engineering - no fluff",
      skillProgress: "Python 2/10 → 8/10 | AI-ready Python",
      projects: [
        { name: "NumPy Data Processor", week: 1, tech: "Python, NumPy" },
        { name: "ML Data Pipeline", week: 3, tech: "Python, Pandas, OOP" },
        { name: "Kaggle EDA Notebook", week: 6, tech: "Pandas, Matplotlib, Seaborn" }
      ],
      weeks_detail: [
        {
          weekNum: 1,
          title: "Python Essentials for AI",
          goal: "Core Python syntax + data structures for ML",
          hoursThisWeek: 30,
          summary: "Variables, data types, control flow, functions, NumPy basics. Weekend: Build NumPy Array Processor.",
          weekendProject: {
            name: "NumPy Array Processor",
            duration: "8 hours",
            techStack: "Python, NumPy, typing",
            requirements: [
              "Load data from CSV using NumPy",
              "Perform vectorized operations (mean, std, normalization)",
              "Matrix operations for ML (dot product, transpose)",
              "Save processed data",
              "Command-line interface"
            ],
            evaluation: "Can process 10,000 records in <1 second",
            portfolioValue: "Shows: Python basics + NumPy + performance optimization"
          },
          days: [
            {
              day: "Monday",
              dailyGoal: "Setup environment + Python basics for data manipulation",
              morning: {
                timeSlot: "8:30-11:00 (2.5hrs)",
                focus: "Active Learning + Coding",
                tasks: [
                  {
                    id: "p1w1d1m1",
                    time: "8:30-9:00",
                    title: "🔧 AI Engineering Environment Setup",
                    description: "Install Python 3.11, VS Code with AI extensions, Git, create virtual environment",
                    resources: [
                      { name: "Python 3.11 Download", url: "https://www.python.org/downloads/", type: "primary" },
                      { name: "VS Code + Python Extension", url: "https://code.visualstudio.com/docs/python/python-tutorial", type: "primary" }
                    ],
                    action: "Install everything, test with: python --version, pip --version, git --version. Create first venv.",
                    output: "Screenshot of versions + venv activated",
                    aiRelevance: "Every AI project needs isolated environments (venv) for dependencies",
                    xp: 25,
                    estimatedHours: 0.5
                  },
                  {
                    id: "p1w1d1m2",
                    time: "9:00-10:15",
                    title: "📊 Python Data Types for ML",
                    description: "Focus ONLY on data types used in AI: int, float, list, dict, numpy arrays",
                    resources: [
                      { name: "Python Data Types Tutorial", url: "https://realpython.com/python-data-types/", type: "primary" }
                    ],
                    action: "Learn and code examples with lists and dicts (used everywhere in ML).",
                    output: "data_types.py with 15 examples",
                    aiRelevance: "ML models work with: lists (features), dicts (hyperparameters), floats (weights)",
                    xp: 40,
                    estimatedHours: 1.25
                  },
                  {
                    id: "p1w1d1m3",
                    time: "10:15-10:30",
                    title: "☕ Break",
                    description: "Stand up, stretch, water - NO PHONE!",
                    xp: 5,
                    estimatedHours: 0.25
                  },
                  {
                    id: "p1w1d1m4",
                    time: "10:30-11:00",
                    title: "💻 Build: Data Manipulation Script",
                    description: "Write script that processes lists of numbers (like ML features)",
                    action: "Create features_processor.py: Take list of numbers, calculate mean, find max/min, normalize (0-1 range)",
                    output: "Working script that processes [1,2,3,4,5] → calculates stats → outputs normalized values",
                    aiRelevance: "This is EXACTLY what you do in ML preprocessing",
                    xp: 50,
                    estimatedHours: 0.5
                  }
                ]
              },
              night: {
                timeSlot: "10:30-11:30 (1hr)",
                focus: "Passive Learning",
                tasks: [
                  {
                    id: "p1w1d1n1",
                    time: "10:30-11:15",
                    title: "📺 Watch: Python for Data Science",
                    description: "Passive watching - understand the bigger picture",
                    resources: [
                      { name: "Corey Schafer - Python Tutorial", url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg&list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7", type: "primary" }
                    ],
                    xp: 20,
                    estimatedHours: 0.75
                  },
                  {
                    id: "p1w1d1n2",
                    time: "11:15-11:30",
                    title: "📝 Daily Reflection",
                    description: "What worked? What was hard? How does this apply to your TCS work?",
                    xp: 10,
                    estimatedHours: 0.25
                  }
                ]
              },
              checkpoint: "Can you create lists, dicts, and calculate basic statistics?",
              totalXP: 150,
              totalHours: 3.5
            }
          ]
        },
        {
          weekNum: 2,
          title: "OOP for ML Architectures",
          goal: "Design reusable ML components with classes",
          hoursThisWeek: 30,
          summary: "Classes, inheritance, design patterns for ML pipelines. Build ML Pipeline library (OOP-based). Weekend: Build Sklearn-style estimator class.",
          resources: [
            { name: "Python OOP Tutorial - Corey Schafer", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM&list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc", type: "video" },
            { name: "Real Python - OOP Guide", url: "https://realpython.com/python3-object-oriented-programming/", type: "article" },
            { name: "Scikit-learn BaseEstimator", url: "https://scikit-learn.org/stable/modules/generated/sklearn.base.BaseEstimator.html", type: "docs" },
            { name: "Design Patterns for ML", url: "https://www.oreilly.com/library/view/building-machine-learning/9781492053187/", type: "book" },
            { name: "OOP Design Patterns - TechWithTim", url: "https://www.youtube.com/watch?v=v_DaycSOcRc", type: "video" },
            { name: "Building ML Classes - Sentdex", url: "https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v", type: "video" }
          ],
          logicBuilding: {
            description: "Master OOP problem-solving patterns before building ML components",
            videoResources: [
              { name: "OOP Design Thinking - Tech With Tim", url: "https://www.youtube.com/watch?v=pTB0EiLXUC8", type: "video", duration: "25 min" },
              { name: "Class Design Patterns", url: "https://www.youtube.com/watch?v=tv-_1er1mWI", type: "video", duration: "30 min" },
              { name: "Object-Oriented Problem Solving", url: "https://www.youtube.com/watch?v=m_MQYyJpIjg", type: "video", duration: "40 min" }
            ],
            platforms: [
              { name: "LeetCode - OOP Problems", url: "https://leetcode.com/problemset/all/?topicSlugs=object-oriented-design", type: "practice" },
              { name: "HackerRank - OOP Track", url: "https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=py-classes", type: "practice" }
            ],
            topics: [
              {
                topic: "Classes & Objects",
                patterns: ["Encapsulation", "Data hiding", "Method design"],
                problems: [
                  { difficulty: "easy", problem: "Create a 'BankAccount' class with deposit(), withdraw(), check_balance() methods", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Build a 'Student' class with name, grades list, calculate_average() method", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Design 'Rectangle' class with area(), perimeter(), and is_square() methods", platform: "LeetCode", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Create 'ShoppingCart' class: add_item(), remove_item(), total_price() with discounts", platform: "Custom", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Build 'Library' class managing multiple Book objects with search(), borrow()", platform: "Project", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Design 'Temperature' class converting between C/F/K with validation", platform: "HackerRank", estimatedTime: "20 min" },
                  { difficulty: "hard", problem: "Implement 'TaskManager' with priority queue, add(), remove(), get_next()", platform: "LeetCode", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Create 'Inventory' system with stock tracking, reorder alerts, transactions", platform: "Project", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Build 'DatabaseConnection' class with connection pooling and retry logic", platform: "Advanced", estimatedTime: "50 min" }
                ]
              },
              {
                topic: "Inheritance",
                patterns: ["Parent-child relationships", "super()", "Method overriding"],
                problems: [
                  { difficulty: "easy", problem: "Create 'Animal' base class, derive 'Dog' and 'Cat' with speak() method", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Build 'Shape' parent, derive 'Circle' and 'Square' with area() override", platform: "LeetCode", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Design 'Employee' base, derive 'Manager' and 'Developer' with salary calculation", platform: "Custom", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Create 'Vehicle' hierarchy: Car, Bike, Truck with fuel_efficiency()", platform: "HackerRank", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Build 'Account' base, derive 'SavingsAccount', 'CheckingAccount' with interest logic", platform: "Project", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Implement 'Transformer' base class, derive scalers with fit()/transform()", platform: "ML-focused", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Design multi-level inheritance: Person → Student → GraduateStudent with super()", platform: "Advanced", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Build ML model hierarchy: BaseModel → LinearModel → Ridge/Lasso", platform: "ML Project", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Create payment system: Payment → CreditCard/PayPal/Crypto with validation", platform: "Project", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Encapsulation & Properties",
                patterns: ["Private attributes", "@property", "Data validation"],
                problems: [
                  { difficulty: "easy", problem: "Create class with private _balance, use @property for read-only access", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Build 'Person' with _age, validate (0-150) in setter", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Design 'Product' with _price, ensure price >= 0 in setter", platform: "LeetCode", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Create 'User' with _password (hashed), _email (validated format)", platform: "Project", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Build 'Matrix' class with private _data, validate dimensions in operations", platform: "ML-focused", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Design 'Config' singleton with private constructor, get_instance() method", platform: "Advanced", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Implement 'Model' with _weights (private), property returns copy not reference", platform: "ML Project", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Create 'SecureVault' with encryption on write, decryption on read using properties", platform: "Advanced", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Build 'Dataset' with lazy loading: _data loads only when accessed via property", platform: "ML Advanced", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Polymorphism",
                patterns: ["Interface-like design", "Duck typing", "Method overloading"],
                problems: [
                  { difficulty: "easy", problem: "Create 'draw()' method in Circle, Square, Triangle - call polymorphically", platform: "HackerRank", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Build 'Serializer': JSON, XML, YAML classes with serialize() method", platform: "Custom", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Design 'Logger': Console, File, Database loggers with log() method", platform: "Project", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Implement 'Sorter' interface: BubbleSort, QuickSort, MergeSort with sort()", platform: "LeetCode", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Create 'Notifier': Email, SMS, Push with send() - use in notification system", platform: "Project", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Build 'DataLoader': CSV, JSON, SQL loaders with load() - polymorphic usage", platform: "ML-focused", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Design 'Strategy' pattern: Different pricing strategies applied polymorphically", platform: "Advanced", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Implement 'Optimizer': SGD, Adam, RMSprop with update() - plug into training loop", platform: "ML Project", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Create 'Middleware' pipeline: Auth, Logging, Caching - chainable polymorphic calls", platform: "Advanced", estimatedTime: "50 min" }
                ]
              }
            ],
            dailyPractice: {
              description: "5 OOP problems daily to master class design for ML systems",
              schedule: [
                {
                  day: "Day 1",
                  problems: [
                    { id: "w2d1p1", problem: "BankAccount class", difficulty: "easy", topic: "Classes", time: "15 min" },
                    { id: "w2d1p2", problem: "Student class with grades", difficulty: "easy", topic: "Classes", time: "15 min" },
                    { id: "w2d1p3", problem: "Rectangle class", difficulty: "easy", topic: "Classes", time: "15 min" },
                    { id: "w2d1p4", problem: "Animal inheritance", difficulty: "easy", topic: "Inheritance", time: "15 min" },
                    { id: "w2d1p5", problem: "Shape hierarchy", difficulty: "easy", topic: "Inheritance", time: "20 min" }
                  ]
                },
                {
                  day: "Day 2",
                  problems: [
                    { id: "w2d2p1", problem: "ShoppingCart class", difficulty: "medium", topic: "Classes", time: "25 min" },
                    { id: "w2d2p2", problem: "Employee hierarchy", difficulty: "easy", topic: "Inheritance", time: "20 min" },
                    { id: "w2d2p3", problem: "Private balance property", difficulty: "easy", topic: "Encapsulation", time: "15 min" },
                    { id: "w2d2p4", problem: "Person with age validation", difficulty: "easy", topic: "Encapsulation", time: "15 min" },
                    { id: "w2d2p5", problem: "Polymorphic draw method", difficulty: "easy", topic: "Polymorphism", time: "20 min" }
                  ]
                },
                {
                  day: "Day 3",
                  problems: [
                    { id: "w2d3p1", problem: "Library management system", difficulty: "medium", topic: "Classes", time: "30 min" },
                    { id: "w2d3p2", problem: "Vehicle hierarchy with fuel", difficulty: "medium", topic: "Inheritance", time: "30 min" },
                    { id: "w2d3p3", problem: "Product price validation", difficulty: "easy", topic: "Encapsulation", time: "15 min" },
                    { id: "w2d3p4", problem: "Serializer polymorphism", difficulty: "easy", topic: "Polymorphism", time: "20 min" },
                    { id: "w2d3p5", problem: "Account types with interest", difficulty: "medium", topic: "Inheritance", time: "35 min" }
                  ]
                },
                {
                  day: "Day 4",
                  problems: [
                    { id: "w2d4p1", problem: "TaskManager with priority", difficulty: "hard", topic: "Classes", time: "40 min" },
                    { id: "w2d4p2", problem: "Transformer base class", difficulty: "medium", topic: "Inheritance", time: "30 min" },
                    { id: "w2d4p3", problem: "User with password hashing", difficulty: "medium", topic: "Encapsulation", time: "30 min" },
                    { id: "w2d4p4", problem: "Logger polymorphism", difficulty: "easy", topic: "Polymorphism", time: "25 min" },
                    { id: "w2d4p5", problem: "Temperature class convertor", difficulty: "medium", topic: "Classes", time: "20 min" }
                  ]
                },
                {
                  day: "Day 5",
                  problems: [
                    { id: "w2d5p1", problem: "Multi-level Student inheritance", difficulty: "hard", topic: "Inheritance", time: "40 min" },
                    { id: "w2d5p2", problem: "Matrix with dimension validation", difficulty: "medium", topic: "Encapsulation", time: "35 min" },
                    { id: "w2d5p3", problem: "Sorter strategy pattern", difficulty: "medium", topic: "Polymorphism", time: "35 min" },
                    { id: "w2d5p4", problem: "Inventory system", difficulty: "hard", topic: "Classes", time: "45 min" },
                    { id: "w2d5p5", problem: "Config singleton pattern", difficulty: "medium", topic: "Encapsulation", time: "30 min" }
                  ]
                },
                {
                  day: "Day 6",
                  problems: [
                    { id: "w2d6p1", problem: "ML model hierarchy", difficulty: "hard", topic: "Inheritance", time: "50 min" },
                    { id: "w2d6p2", problem: "Notifier polymorphic system", difficulty: "medium", topic: "Polymorphism", time: "30 min" },
                    { id: "w2d6p3", problem: "Model with private weights", difficulty: "hard", topic: "Encapsulation", time: "40 min" },
                    { id: "w2d6p4", problem: "DataLoader polymorphism", difficulty: "medium", topic: "Polymorphism", time: "35 min" },
                    { id: "w2d6p5", problem: "DatabaseConnection pool", difficulty: "hard", topic: "Classes", time: "50 min" }
                  ]
                },
                {
                  day: "Day 7",
                  problems: [
                    { id: "w2d7p1", problem: "Payment system hierarchy", difficulty: "hard", topic: "Inheritance", time: "45 min" },
                    { id: "w2d7p2", problem: "Strategy pattern for pricing", difficulty: "hard", topic: "Polymorphism", time: "40 min" },
                    { id: "w2d7p3", problem: "SecureVault with encryption", difficulty: "hard", topic: "Encapsulation", time: "50 min" },
                    { id: "w2d7p4", problem: "Optimizer implementations (SGD/Adam)", difficulty: "hard", topic: "Polymorphism", time: "50 min" },
                    { id: "w2d7p5", problem: "Dataset with lazy loading", difficulty: "hard", topic: "Encapsulation", time: "45 min" }
                  ]
                }
              ]
            },
            pseudocodeExercises: [
              { task: "Design class hierarchy for a zoo management system (animals, cages, staff)", estimatedTime: "25 min" },
              { task: "Flowchart: Object creation and method call sequence for inherited classes", estimatedTime: "20 min" },
              { task: "Pseudocode: Implement a polymorphic payment processing system", estimatedTime: "30 min" }
            ]
          },
          handsOn: [
            {
              rootTopic: "Python OOP Fundamentals",
              subTopics: ["Classes", "Methods", "Attributes", "__init__"],
              exercises: [
                { difficulty: "easy", task: "Create a 'DataPoint' class with features (list) and label (int). Add methods: normalize(), scale(), to_dict()", xp: 30, estimatedHours: 0.5 },
                { difficulty: "easy", task: "Build 'Dataset' class that holds multiple DataPoint objects. Add: add(), remove(), get_by_index(), __len__()", xp: 40, estimatedHours: 1 },
                { difficulty: "medium", task: "Create 'FeatureTransformer' base class with fit() and transform() methods (abstract). Don't implement logic yet.", xp: 35, estimatedHours: 0.75 }
              ]
            },
            {
              rootTopic: "Inheritance & Polymorphism",
              subTopics: ["Parent/Child classes", "super()", "Method overriding"],
              exercises: [
                { difficulty: "medium", task: "Create 'StandardScaler' that inherits FeatureTransformer. Implement fit() to calculate mean/std, transform() to standardize", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Create 'MinMaxScaler' that also inherits FeatureTransformer. Implement fit() for min/max, transform() to scale 0-1", xp: 50, estimatedHours: 1 },
                { difficulty: "hard", task: "Build 'PCA' transformer (just structure, not math) with fit() that 'learns' components, transform() that 'projects' data", xp: 60, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Encapsulation & Properties",
              subTopics: ["Private attributes", "@property", "Getters/Setters"],
              exercises: [
                { difficulty: "easy", task: "Add @property to Dataset class: 'size' (read-only), 'features' (read-only), '_data' (private)", xp: 30, estimatedHours: 0.5 },
                { difficulty: "medium", task: "Create 'Model' class with private _weights, _bias. Use @property for read, @setter for validation (weights must be list)", xp: 40, estimatedHours: 1 }
              ]
            },
            {
              rootTopic: "Composition & Design Patterns",
              subTopics: ["Has-a relationships", "Pipeline pattern", "Strategy pattern"],
              exercises: [
                { difficulty: "hard", task: "Build 'Pipeline' class that chains transformers: Pipeline([scaler, pca]). Implement fit() that fits each, transform() that applies all", xp: 70, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Create 'MLModel' base class with fit(X,y), predict(X). Make 'LinearRegression' and 'LogisticRegression' subclasses (stub methods)", xp: 60, estimatedHours: 2 },
                { difficulty: "expert", task: "Build complete 'Estimator' following sklearn API: fit(), predict(), score(), get_params(), set_params(). Use **kwargs", xp: 100, estimatedHours: 4 }
              ]
            }
          ],
          weekendProject: {
            name: "Sklearn-Style ML Library",
            duration: "8 hours",
            description: "Build a mini sklearn library with BaseEstimator, transformers, and models",
            requirements: [
              "BaseEstimator class with fit(), predict(), score()",
              "3 Transformers: StandardScaler, MinMaxScaler, PCA (structure only)",
              "2 Models: LinearRegression, KNN (can use sklearn internally for math)",
              "Pipeline class that chains transformers + model",
              "All classes follow sklearn API: fit(X,y), transform(X), predict(X)",
              "Unit tests for each class using pytest",
              "Type hints for all methods"
            ],
            techStack: "Python, NumPy, typing, pytest",
            evaluation: "Can chain: Pipeline([StandardScaler(), PCA(), LinearRegression()]).fit(X,y).predict(X_test)",
            portfolioValue: "Shows: OOP mastery, design patterns, API design, testing"
          }
        },
        {
          weekNum: 3,
          title: "Pandas for Data Wrangling",
          goal: "Master data manipulation for ML datasets",
          hoursThisWeek: 32,
          summary: "DataFrames, groupby, merging - all data preprocessing for ML. Weekend: Complete Kaggle EDA notebook (Titanic or House Prices).",
          resources: [
            { name: "Pandas Official Tutorial", url: "https://pandas.pydata.org/docs/user_guide/10min.html", type: "docs" },
            { name: "Kaggle Learn - Pandas", url: "https://www.kaggle.com/learn/pandas", type: "interactive" },
            { name: "Data School - Pandas Playlist", url: "https://www.youtube.com/watch?v=yzIMircGU5I&list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y", type: "video" },
            { name: "Titanic Dataset", url: "https://www.kaggle.com/c/titanic", type: "dataset" },
            { name: "Pandas Complete Tutorial - Keith Galli", url: "https://www.youtube.com/watch?v=vmEHCJofslg", type: "video" },
            { name: "Data Cleaning with Pandas - Corey Schafer", url: "https://www.youtube.com/watch?v=bDhvCp3_lYw", type: "video" }
          ],
          logicBuilding: {
            description: "Build data manipulation and transformation logic before working with real ML datasets",
            videoResources: [
              { name: "Data Wrangling Logic - Corey Schafer", url: "https://www.youtube.com/watch?v=ZyhVh-qRZPA", type: "video", duration: "30 min" },
              { name: "Thinking in Arrays - NumPy Logic", url: "https://www.youtube.com/watch?v=DcfYgePyedM", type: "video", duration: "35 min" },
              { name: "DataFrame Operations Patterns", url: "https://www.youtube.com/watch?v=tcRGa2soc-c", type: "video", duration: "25 min" }
            ],
            platforms: [
              { name: "Kaggle - Pandas Exercises", url: "https://www.kaggle.com/learn/pandas", type: "practice" },
              { name: "HackerRank - NumPy", url: "https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=numpy", type: "practice" },
              { name: "LeetCode - Array Manipulation", url: "https://leetcode.com/tag/array/", type: "practice" }
            ],
            topics: [
              {
                topic: "Array Manipulation Logic",
                patterns: ["Indexing", "Slicing", "Reshaping", "Broadcasting"],
                problems: [
                  { difficulty: "easy", problem: "Extract every 3rd element from array [0,1,2,...,99]", platform: "HackerRank", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Reshape 1D array of 12 elements into 3x4 and 4x3 matrices", platform: "NumPy", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Reverse array rows and columns separately using slicing", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Extract diagonal, anti-diagonal, and border elements from 5x5 matrix", platform: "LeetCode", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Use broadcasting to add 1D array to each row of 2D array without loops", platform: "NumPy", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Implement sliding window on array (window size 3, stride 1)", platform: "Custom", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Rotate 2D array 90 degrees using advanced indexing (no transpose)", platform: "LeetCode", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Implement fancy indexing: Extract elements at positions [[0,1], [2,3]] from 4x4 matrix", platform: "Advanced", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Vectorize nested loops: Calculate pairwise distances between all points", platform: "ML-focused", estimatedTime: "40 min" }
                ]
              },
              {
                topic: "Data Filtering Patterns",
                patterns: ["Boolean indexing", "Query conditions", "Missing data", "Duplicates"],
                problems: [
                  { difficulty: "easy", problem: "Filter DataFrame: Get all rows where Age > 30 and Fare < 50", platform: "Kaggle", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Find and count missing values in each column", platform: "Pandas", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Remove duplicate rows based on ['Name', 'Age'] columns", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Complex filter: (Age > 25 OR Fare > 100) AND Survived == 1", platform: "Custom", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Handle missing data: Fill Age with median, Cabin with 'Unknown', drop rows with >50% missing", platform: "Kaggle", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Filter outliers: Remove rows where value > mean + 3*std", platform: "ML-focused", estimatedTime: "25 min" },
                  { difficulty: "hard", problem: "Conditional replacement: Replace values based on multiple column conditions", platform: "Advanced", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Forward-fill then back-fill missing data in time series", platform: "Pandas", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Smart duplicate detection: Consider fuzzy matching on text columns", platform: "Project", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "GroupBy & Aggregation Logic",
                patterns: ["Split-Apply-Combine", "Custom aggregations", "Transform", "Multi-level grouping"],
                problems: [
                  { difficulty: "easy", problem: "Group by 'Pclass', calculate mean Age and Fare for each class", platform: "Kaggle", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Count survivors by Sex: Male vs Female survival rates", platform: "Pandas", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Find min, max, median Age for each Embarked location", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Multi-level groupby: Group by ['Pclass', 'Sex'], aggregate multiple columns", platform: "Custom", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Custom aggregation: Calculate IQR (75th - 25th percentile) per group", platform: "Advanced", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Transform: Normalize Age within each Pclass group (z-score)", platform: "ML-focused", estimatedTime: "25 min" },
                  { difficulty: "hard", problem: "Rolling aggregation: 3-row moving average within each group", platform: "Time Series", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Custom agg function: Top 3 most common values per group", platform: "Project", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Pivot table with multiple aggregations and calculated fields", platform: "Advanced", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Data Transformation Logic",
                patterns: ["Apply/Map", "String operations", "Binning", "One-hot encoding"],
                problems: [
                  { difficulty: "easy", problem: "Extract title (Mr, Mrs, Miss) from 'Name' column using string split", platform: "Kaggle", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Bin Age into categories: Child (0-12), Teen (13-19), Adult (20-60), Senior (60+)", platform: "Pandas", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Convert 'Sex' to numeric: Male=0, Female=1", platform: "HackerRank", estimatedTime: "10 min" },
                  { difficulty: "medium", problem: "Apply custom function: Categorize Fare into 'Low', 'Medium', 'High' based on quantiles", platform: "Custom", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "String cleaning: Remove special chars, lowercase, strip whitespace from text column", platform: "NLP-prep", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "One-hot encode 'Embarked' column, handle missing values first", platform: "ML-focused", estimatedTime: "25 min" },
                  { difficulty: "hard", problem: "Feature engineering: Create interaction features (Age*Pclass, Fare/Age ratio)", platform: "ML Advanced", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Datetime features: Extract year, month, day, weekday, is_weekend from timestamp", platform: "Time Series", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Vectorized string regex: Extract multiple patterns from text column in one pass", platform: "Advanced", estimatedTime: "45 min" }
                ]
              }
            ],
            dailyPractice: {
              description: "5 data manipulation problems daily to master Pandas/NumPy for ML preprocessing",
              schedule: [
                { day: "Day 1", problems: [
                  { id: "w3d1p1", problem: "Extract every 3rd element", difficulty: "easy", topic: "Arrays", time: "10 min" },
                  { id: "w3d1p2", problem: "Reshape 12-element array", difficulty: "easy", topic: "Arrays", time: "15 min" },
                  { id: "w3d1p3", problem: "Filter Age > 30, Fare < 50", difficulty: "easy", topic: "Filtering", time: "15 min" },
                  { id: "w3d1p4", problem: "Count missing values", difficulty: "easy", topic: "Filtering", time: "10 min" },
                  { id: "w3d1p5", problem: "Group by Pclass, mean Age", difficulty: "easy", topic: "GroupBy", time: "15 min" }
                ]},
                { day: "Day 2", problems: [
                  { id: "w3d2p1", problem: "Reverse array rows/columns", difficulty: "easy", topic: "Arrays", time: "15 min" },
                  { id: "w3d2p2", problem: "Remove duplicate rows", difficulty: "easy", topic: "Filtering", time: "15 min" },
                  { id: "w3d2p3", problem: "Survival rate by Sex", difficulty: "easy", topic: "GroupBy", time: "10 min" },
                  { id: "w3d2p4", problem: "Extract title from Name", difficulty: "easy", topic: "Transform", time: "20 min" },
                  { id: "w3d2p5", problem: "Bin Age into categories", difficulty: "easy", topic: "Transform", time: "15 min" }
                ]},
                { day: "Day 3", problems: [
                  { id: "w3d3p1", problem: "Extract matrix diagonal", difficulty: "medium", topic: "Arrays", time: "25 min" },
                  { id: "w3d3p2", problem: "Complex boolean filter", difficulty: "medium", topic: "Filtering", time: "20 min" },
                  { id: "w3d3p3", problem: "Multi-level groupby", difficulty: "medium", topic: "GroupBy", time: "25 min" },
                  { id: "w3d3p4", problem: "Convert Sex to numeric", difficulty: "easy", topic: "Transform", time: "10 min" },
                  { id: "w3d3p5", problem: "Broadcasting array addition", difficulty: "medium", topic: "Arrays", time: "20 min" }
                ]},
                { day: "Day 4", problems: [
                  { id: "w3d4p1", problem: "Handle missing data strategy", difficulty: "medium", topic: "Filtering", time: "30 min" },
                  { id: "w3d4p2", problem: "Custom IQR aggregation", difficulty: "medium", topic: "GroupBy", time: "30 min" },
                  { id: "w3d4p3", problem: "Apply custom fare categorization", difficulty: "medium", topic: "Transform", time: "25 min" },
                  { id: "w3d4p4", problem: "Sliding window implementation", difficulty: "medium", topic: "Arrays", time: "30 min" },
                  { id: "w3d4p5", problem: "Filter outliers with std", difficulty: "medium", topic: "Filtering", time: "25 min" }
                ]},
                { day: "Day 5", problems: [
                  { id: "w3d5p1", problem: "Normalize within groups", difficulty: "medium", topic: "GroupBy", time: "25 min" },
                  { id: "w3d5p2", problem: "String cleaning pipeline", difficulty: "medium", topic: "Transform", time: "30 min" },
                  { id: "w3d5p3", problem: "Rotate matrix 90 degrees", difficulty: "hard", topic: "Arrays", time: "35 min" },
                  { id: "w3d5p4", problem: "Conditional replacement", difficulty: "hard", topic: "Filtering", time: "35 min" },
                  { id: "w3d5p5", problem: "One-hot encode with missing", difficulty: "medium", topic: "Transform", time: "25 min" }
                ]},
                { day: "Day 6", problems: [
                  { id: "w3d6p1", problem: "Rolling group aggregation", difficulty: "hard", topic: "GroupBy", time: "40 min" },
                  { id: "w3d6p2", problem: "Feature interaction engineering", difficulty: "hard", topic: "Transform", time: "40 min" },
                  { id: "w3d6p3", problem: "Fancy indexing extraction", difficulty: "hard", topic: "Arrays", time: "30 min" },
                  { id: "w3d6p4", problem: "Forward-fill time series", difficulty: "hard", topic: "Filtering", time: "30 min" },
                  { id: "w3d6p5", problem: "Top 3 values per group", difficulty: "hard", topic: "GroupBy", time: "35 min" }
                ]},
                { day: "Day 7", problems: [
                  { id: "w3d7p1", problem: "Vectorize pairwise distances", difficulty: "hard", topic: "Arrays", time: "40 min" },
                  { id: "w3d7p2", problem: "Smart duplicate fuzzy matching", difficulty: "hard", topic: "Filtering", time: "45 min" },
                  { id: "w3d7p3", problem: "Pivot with calculated fields", difficulty: "hard", topic: "GroupBy", time: "45 min" },
                  { id: "w3d7p4", problem: "Datetime feature extraction", difficulty: "hard", topic: "Transform", time: "35 min" },
                  { id: "w3d7p5", problem: "Vectorized regex patterns", difficulty: "hard", topic: "Transform", time: "45 min" }
                ]}
              ]
            },
            pseudocodeExercises: [
              { task: "Design data cleaning pipeline: Handle missing → Remove outliers → Normalize → Encode", estimatedTime: "25 min" },
              { task: "Flowchart: GroupBy-Apply-Combine pattern for feature engineering", estimatedTime: "20 min" },
              { task: "Pseudocode: Implement train-test split maintaining class distribution", estimatedTime: "30 min" }
            ]
          },
          handsOn: [
            {
              rootTopic: "DataFrame Basics",
              subTopics: ["Creating DataFrames", "Selecting columns/rows", "loc vs iloc", "Boolean indexing"],
              exercises: [
                { difficulty: "easy", task: "Load Titanic CSV. Display first 10 rows, last 5 rows, random 3 rows. Get shape, columns, dtypes, info()", xp: 25, estimatedHours: 0.5 },
                { difficulty: "easy", task: "Select columns: ['Name', 'Age', 'Fare']. Then select passengers where Age > 30 using boolean indexing", xp: 30, estimatedHours: 0.5 },
                { difficulty: "medium", task: "Use .loc to get rows 10-20 with columns 'Sex', 'Age', 'Survived'. Use .iloc for same with integer positions", xp: 35, estimatedHours: 0.75 },
                { difficulty: "medium", task: "Find all passengers: Age between 20-40 AND Fare > 30 AND Sex == 'female'. Count how many survived", xp: 40, estimatedHours: 1 }
              ]
            },
            {
              rootTopic: "Data Cleaning & Missing Values",
              subTopics: ["isnull()", "fillna()", "dropna()", "replace()"],
              exercises: [
                { difficulty: "easy", task: "Check missing values: df.isnull().sum(). Visualize with: df.isnull().sum().plot(kind='bar')", xp: 25, estimatedHours: 0.5 },
                { difficulty: "medium", task: "Fill missing Age with median age. Fill missing Embarked with mode. Drop rows where Fare is null", xp: 45, estimatedHours: 1 },
                { difficulty: "medium", task: "Create new column 'AgeGroup': fillna Age with median, then bin into: 'Child'(<18), 'Adult'(18-60), 'Senior'(>60)", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Smart imputation: Fill missing Age based on Pclass median (group by Pclass, fill with group median)", xp: 60, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "GroupBy & Aggregations",
              subTopics: ["groupby()", "agg()", "transform()", "pivot_table()"],
              exercises: [
                { difficulty: "medium", task: "Group by 'Sex', calculate mean Age, Fare, Survived. Which gender had higher survival rate?", xp: 40, estimatedHours: 1 },
                { difficulty: "medium", task: "Group by 'Pclass' and 'Sex', calculate survival rate. Create pivot table with Pclass as rows, Sex as columns", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Multi-aggregation: Group by Pclass, get {'Age': ['mean', 'std'], 'Fare': ['min', 'max', 'mean'], 'Survived': 'sum'}", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Use transform() to create column 'AgeDiffFromClassMean' = passenger age - mean age of their Pclass", xp: 65, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Merging & Joining",
              subTopics: ["merge()", "join()", "concat()", "Inner/Outer/Left/Right joins"],
              exercises: [
                { difficulty: "medium", task: "Create df_prices with PassengerId and TicketPrice (random). Merge with Titanic on PassengerId using inner join", xp: 45, estimatedHours: 1 },
                { difficulty: "medium", task: "Create df_family with PassengerId, FamilySize. Do left join with Titanic (keep all Titanic rows)", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Split Titanic into 3 chunks. Concatenate back using concat(). Then split into train/test and merge with cabin info", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Feature Engineering",
              subTopics: ["apply()", "map()", "lambda", "String methods", "Date parsing"],
              exercises: [
                { difficulty: "medium", task: "Extract title from Name column ('Mr', 'Mrs', 'Miss', 'Master'). Use .str.extract() and regex", xp: 55, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Create 'FamilySize' = SibSp + Parch + 1. Then create 'IsAlone' = 1 if FamilySize==1 else 0. Analyze survival by IsAlone", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Create 'FarePerPerson' = Fare / FamilySize. Create 'CabinDeck' = first letter of Cabin (fill null with 'Unknown')", xp: 65, estimatedHours: 2 },
                { difficulty: "expert", task: "Advanced feature: Create interaction features: Age*Pclass, Fare*Survived, Title*Sex. One-hot encode categorical variables", xp: 80, estimatedHours: 3 }
              ]
            }
          ],
          weekendProject: {
            name: "Complete Kaggle EDA & Feature Engineering",
            duration: "10 hours",
            description: "Full exploratory data analysis on Titanic dataset with advanced feature engineering",
            requirements: [
              "Load and inspect data: shape, dtypes, missing values, statistics",
              "Handle missing values: Smart imputation strategies",
              "Univariate analysis: Histograms, box plots for Age, Fare, Pclass",
              "Bivariate analysis: Survival vs Sex, Pclass, Age, Fare (use seaborn)",
              "Feature engineering: Title extraction, FamilySize, IsAlone, FarePerPerson, AgeGroup",
              "Correlation matrix heatmap of numeric features",
              "Create 10+ derived features that could improve ML models",
              "Export cleaned dataset as 'titanic_processed.csv'",
              "Document findings in Jupyter notebook with markdown explanations"
            ],
            techStack: "Pandas, NumPy, Matplotlib, Seaborn, Jupyter",
            evaluation: "Notebook has clear EDA insights, 10+ engineered features, ready for ML modeling",
            portfolioValue: "Shows: Data wrangling, statistical thinking, feature engineering creativity"
          }
        },
        {
          weekNum: 4,
          title: "Advanced Python for Production ML",
          goal: "Write production-ready ML code",
          hoursThisWeek: 35,
          summary: "Decorators, generators, async, testing (pytest), type hints, logging. Weekend: Refactor all previous projects to production standards.",
          resources: [
            { name: "Real Python - Decorators", url: "https://realpython.com/primer-on-python-decorators/", type: "article" },
            { name: "Pytest Documentation", url: "https://docs.pytest.org/en/stable/getting-started.html", type: "docs" },
            { name: "Python Type Hints", url: "https://docs.python.org/3/library/typing.html", type: "docs" },
            { name: "Effective Python Book", url: "https://effectivepython.com/", type: "book" },
            { name: "Decorators Tutorial - Corey Schafer", url: "https://www.youtube.com/watch?v=FsAPt_9Bf3U", type: "video" },
            { name: "Python Testing - Tech With Tim", url: "https://www.youtube.com/watch?v=6tNS--WetLI", type: "video" },
            { name: "Async Python - ArjanCodes", url: "https://www.youtube.com/watch?v=2IW-ZEui4h4", type: "video" }
          ],
          logicBuilding: {
            description: "Master advanced Python patterns and algorithms for production ML code",
            videoResources: [
              { name: "Recursion Thinking - CS Dojo", url: "https://www.youtube.com/watch?v=KEEKn7Me-ms", type: "video", duration: "20 min" },
              { name: "Generator Patterns - mCoding", url: "https://www.youtube.com/watch?v=tmeKsb2Fras", type: "video", duration: "25 min" },
              { name: "Algorithm Design Patterns", url: "https://www.youtube.com/watch?v=p65AHm9MX80", type: "video", duration: "40 min" }
            ],
            platforms: [
              { name: "LeetCode - Recursion Problems", url: "https://leetcode.com/tag/recursion/", type: "practice" },
              { name: "HackerRank - Algorithms", url: "https://www.hackerrank.com/domains/algorithms", type: "practice" },
              { name: "Codewars - Advanced Python", url: "https://www.codewars.com/?language=python", type: "practice" }
            ],
            topics: [
              {
                topic: "Recursion Mastery",
                patterns: ["Base case", "Recursive case", "Backtracking", "Memoization"],
                problems: [
                  { difficulty: "easy", problem: "Calculate factorial recursively with base case n=0", platform: "HackerRank", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Sum of digits: sum_digits(123) = 6 using recursion", platform: "Codewars", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Print numbers 1 to N recursively (no loops)", platform: "Custom", estimatedTime: "10 min" },
                  { difficulty: "medium", problem: "Fibonacci with memoization (cache results in dict)", platform: "LeetCode", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Flatten nested list [[1,[2,3]],4] → [1,2,3,4] recursively", platform: "HackerRank", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Find all subsets of set [1,2,3] using backtracking", platform: "LeetCode", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Solve N-Queens problem with backtracking", platform: "LeetCode", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Generate all valid parentheses combinations for n pairs", platform: "LeetCode", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Word break with memoization: Can 'leetcode' be segmented?", platform: "LeetCode", estimatedTime: "50 min" }
                ]
              },
              {
                topic: "Generator Patterns",
                patterns: ["yield", "Lazy evaluation", "Pipeline", "Infinite sequences"],
                problems: [
                  { difficulty: "easy", problem: "Create generator for Fibonacci sequence (infinite)", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Generator that yields squares of numbers 1 to N", platform: "HackerRank", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Read large file line by line using generator (memory efficient)", platform: "Real-world", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Build data processing pipeline: load → filter → transform → aggregate using generators", platform: "ML-focused", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Generator for batch processing: yield chunks of size N from dataset", platform: "ML Pipeline", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Prime number generator with Sieve of Eratosthenes (lazy)", platform: "Codewars", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Implement itertools.combinations using generators", platform: "Advanced", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Generator-based tree traversal (BFS and DFS)", platform: "LeetCode", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Streaming data aggregation: Calculate rolling statistics with generators", platform: "ML Project", estimatedTime: "50 min" }
                ]
              },
              {
                topic: "Algorithm Design",
                patterns: ["Two pointers", "Sliding window", "Binary search", "Divide & conquer"],
                problems: [
                  { difficulty: "easy", problem: "Two-pointer: Find pair in sorted array that sums to target", platform: "LeetCode", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Binary search: Find element in sorted array (recursive & iterative)", platform: "HackerRank", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Sliding window: Max sum of subarray of size K", platform: "LeetCode", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Two pointers: Remove duplicates from sorted array in-place", platform: "LeetCode", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Sliding window: Longest substring without repeating characters", platform: "LeetCode", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Binary search: Find first/last occurrence in sorted array with duplicates", platform: "Custom", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Merge K sorted arrays using divide & conquer", platform: "LeetCode", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Sliding window: Min window substring containing all characters", platform: "LeetCode", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Two pointers: Trapping rain water problem", platform: "LeetCode", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Dynamic Programming",
                patterns: ["Memoization (top-down)", "Tabulation (bottom-up)", "State transition", "Optimization"],
                problems: [
                  { difficulty: "easy", problem: "Climbing stairs: n steps, can climb 1 or 2 at a time. How many ways?", platform: "LeetCode", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "House robber: Max money without robbing adjacent houses", platform: "LeetCode", estimatedTime: "25 min" },
                  { difficulty: "easy", problem: "Min cost climbing stairs (each step has cost)", platform: "LeetCode", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Longest increasing subsequence using DP", platform: "LeetCode", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Coin change: Min coins needed to make amount (unbounded knapsack)", platform: "LeetCode", estimatedTime: "40 min" },
                  { difficulty: "medium", problem: "Longest common subsequence between two strings", platform: "HackerRank", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "0/1 Knapsack problem: Max value with weight constraint", platform: "LeetCode", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Edit distance: Min operations to convert string A to B", platform: "LeetCode", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Maximize profit with K transactions (stock buying)", platform: "LeetCode", estimatedTime: "60 min" }
                ]
              }
            ],
            dailyPractice: {
              description: "5 algorithm problems daily to master recursion, generators, and optimization patterns",
              schedule: [
                { day: "Day 1", problems: [
                  { id: "w4d1p1", problem: "Recursive factorial", difficulty: "easy", topic: "Recursion", time: "10 min" },
                  { id: "w4d1p2", problem: "Sum of digits recursively", difficulty: "easy", topic: "Recursion", time: "15 min" },
                  { id: "w4d1p3", problem: "Fibonacci generator", difficulty: "easy", topic: "Generators", time: "15 min" },
                  { id: "w4d1p4", problem: "Two-pointer pair sum", difficulty: "easy", topic: "Algorithms", time: "20 min" },
                  { id: "w4d1p5", problem: "Climbing stairs DP", difficulty: "easy", topic: "DP", time: "20 min" }
                ]},
                { day: "Day 2", problems: [
                  { id: "w4d2p1", problem: "Print 1 to N recursively", difficulty: "easy", topic: "Recursion", time: "10 min" },
                  { id: "w4d2p2", problem: "Squares generator", difficulty: "easy", topic: "Generators", time: "10 min" },
                  { id: "w4d2p3", problem: "Binary search iterative", difficulty: "easy", topic: "Algorithms", time: "15 min" },
                  { id: "w4d2p4", problem: "House robber DP", difficulty: "easy", topic: "DP", time: "25 min" },
                  { id: "w4d2p5", problem: "Max subarray sum sliding window", difficulty: "easy", topic: "Algorithms", time: "20 min" }
                ]},
                { day: "Day 3", problems: [
                  { id: "w4d3p1", problem: "Fibonacci with memoization", difficulty: "medium", topic: "Recursion", time: "25 min" },
                  { id: "w4d3p2", problem: "File reader generator", difficulty: "easy", topic: "Generators", time: "20 min" },
                  { id: "w4d3p3", problem: "Remove duplicates two-pointer", difficulty: "medium", topic: "Algorithms", time: "25 min" },
                  { id: "w4d3p4", problem: "Min cost climbing stairs", difficulty: "easy", topic: "DP", time: "20 min" },
                  { id: "w4d3p5", problem: "Flatten nested list recursion", difficulty: "medium", topic: "Recursion", time: "30 min" }
                ]},
                { day: "Day 4", problems: [
                  { id: "w4d4p1", problem: "All subsets backtracking", difficulty: "medium", topic: "Recursion", time: "35 min" },
                  { id: "w4d4p2", problem: "Data pipeline generators", difficulty: "medium", topic: "Generators", time: "35 min" },
                  { id: "w4d4p3", problem: "Longest substring sliding window", difficulty: "medium", topic: "Algorithms", time: "35 min" },
                  { id: "w4d4p4", problem: "Longest increasing subsequence", difficulty: "medium", topic: "DP", time: "35 min" },
                  { id: "w4d4p5", problem: "Binary search with duplicates", difficulty: "medium", topic: "Algorithms", time: "30 min" }
                ]},
                { day: "Day 5", problems: [
                  { id: "w4d5p1", problem: "Batch generator for ML", difficulty: "medium", topic: "Generators", time: "30 min" },
                  { id: "w4d5p2", problem: "Coin change DP", difficulty: "medium", topic: "DP", time: "40 min" },
                  { id: "w4d5p3", problem: "Prime generator Sieve", difficulty: "medium", topic: "Generators", time: "30 min" },
                  { id: "w4d5p4", problem: "Longest common subsequence", difficulty: "medium", topic: "DP", time: "35 min" },
                  { id: "w4d5p5", problem: "N-Queens backtracking", difficulty: "hard", topic: "Recursion", time: "50 min" }
                ]},
                { day: "Day 6", problems: [
                  { id: "w4d6p1", problem: "Valid parentheses generation", difficulty: "hard", topic: "Recursion", time: "45 min" },
                  { id: "w4d6p2", problem: "Merge K sorted arrays", difficulty: "hard", topic: "Algorithms", time: "45 min" },
                  { id: "w4d6p3", problem: "0/1 Knapsack DP", difficulty: "hard", topic: "DP", time: "50 min" },
                  { id: "w4d6p4", problem: "Combinations generator", difficulty: "hard", topic: "Generators", time: "40 min" },
                  { id: "w4d6p5", problem: "Min window substring", difficulty: "hard", topic: "Algorithms", time: "50 min" }
                ]},
                { day: "Day 7", problems: [
                  { id: "w4d7p1", problem: "Word break memoization", difficulty: "hard", topic: "Recursion", time: "50 min" },
                  { id: "w4d7p2", problem: "Tree traversal generator", difficulty: "hard", topic: "Generators", time: "45 min" },
                  { id: "w4d7p3", problem: "Trapping rain water", difficulty: "hard", topic: "Algorithms", time: "45 min" },
                  { id: "w4d7p4", problem: "Edit distance DP", difficulty: "hard", topic: "DP", time: "50 min" },
                  { id: "w4d7p5", problem: "Streaming aggregation generator", difficulty: "hard", topic: "Generators", time: "50 min" }
                ]}
              ]
            },
            pseudocodeExercises: [
              { task: "Design recursive solution for permutations with base case identification", estimatedTime: "25 min" },
              { task: "Flowchart: DP state transition from problem statement to solution", estimatedTime: "30 min" },
              { task: "Pseudocode: Memory-efficient data pipeline using generator composition", estimatedTime: "25 min" }
            ]
          },
          handsOn: [
            {
              rootTopic: "Decorators",
              subTopics: ["Function decorators", "@wraps", "Decorator with arguments", "Class decorators"],
              exercises: [
                { difficulty: "medium", task: "Create @timer decorator that measures function execution time. Test on data processing function", xp: 45, estimatedHours: 1 },
                { difficulty: "medium", task: "Build @validate_types decorator that checks if function arguments match type hints. Raise TypeError if not", xp: 55, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Create @cache decorator that memoizes function results (dict cache). Test on expensive computation like fibonacci", xp: 65, estimatedHours: 2 },
                { difficulty: "hard", task: "Build @retry decorator with parameters: @retry(max_attempts=3, delay=1). Retries function on exception", xp: 70, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Generators & Iterators",
              subTopics: ["yield", "next()", "Generator expressions", "itertools"],
              exercises: [
                { difficulty: "medium", task: "Create generator function read_large_csv() that yields one row at a time (memory efficient). Test on 1M row file", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Build batch_generator(data, batch_size) that yields batches for ML training. Handle remainder at end", xp: 55, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Create infinite_data_augmentation() generator that yields augmented images forever (rotation, flip, crop)", xp: 70, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Type Hints & Static Typing",
              subTopics: ["Basic types", "List[int]", "Optional", "Union", "TypeVar", "Protocol"],
              exercises: [
                { difficulty: "easy", task: "Add type hints to all functions in Week 2 OOP project. Use List, Dict, Optional, Tuple", xp: 40, estimatedHours: 1 },
                { difficulty: "medium", task: "Create type aliases: FeatureVector = List[float], Dataset = List[FeatureVector]. Use in function signatures", xp: 45, estimatedHours: 1 },
                { difficulty: "hard", task: "Use Generic types: create DataLoader[T] class that works with any type. Implement __iter__, __next__ with proper typing", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Testing with Pytest",
              subTopics: ["Test functions", "Fixtures", "Parametrize", "Mocking", "Coverage"],
              exercises: [
                { difficulty: "medium", task: "Write 10 tests for StandardScaler class: test_fit(), test_transform(), test_inverse_transform(), test_edge_cases()", xp: 60, estimatedHours: 2 },
                { difficulty: "medium", task: "Create fixture @pytest.fixture that provides sample dataset. Use it in multiple tests", xp: 45, estimatedHours: 1 },
                { difficulty: "hard", task: "Use @pytest.mark.parametrize to test scaler with different inputs: empty, single value, all zeros, negative values", xp: 70, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Test Pipeline class: Mock transformer.fit(), verify it's called with correct args. Test error handling", xp: 75, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Logging & Error Handling",
              subTopics: ["logging module", "log levels", "try/except", "Custom exceptions"],
              exercises: [
                { difficulty: "medium", task: "Add logging to ML pipeline: INFO for fit/transform start, DEBUG for intermediate values, ERROR for failures", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Create custom exceptions: DataValidationError, ModelNotFittedError, InvalidParameterError. Use in classes", xp: 55, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Build context manager 'with model_training_logger(model_name):' that logs start, end, duration, errors", xp: 70, estimatedHours: 2.5 }
              ]
            }
          ],
          weekendProject: {
            name: "Refactor All Projects to Production Standards",
            duration: "12 hours",
            description: "Take Weeks 1-3 projects and make them production-ready with tests, types, logging",
            requirements: [
              "Add type hints to ALL functions and methods (use mypy to validate)",
              "Write pytest tests with 80%+ coverage for all classes",
              "Add logging throughout: INFO for operations, DEBUG for data, ERROR for exceptions",
              "Create decorators: @timer, @validate_inputs, @cache for expensive operations",
              "Use generators for large data processing (not loading all in memory)",
              "Add docstrings (Google style) for all functions/classes",
              "Create requirements.txt with pinned versions",
              "Add pre-commit hooks: black formatter, flake8 linter, mypy type checker",
              "Write README.md for each project with usage examples"
            ],
            techStack: "Python 3.11, pytest, mypy, black, flake8, logging",
            evaluation: "All tests pass, mypy reports no errors, code is formatted, 80%+ coverage",
            portfolioValue: "Shows: Production code quality, testing discipline, professional software engineering"
          }
        },
        {
          weekNum: 5,
          title: "Python Performance for ML",
          goal: "Optimize code for large datasets",
          hoursThisWeek: 30,
          summary: "Profiling, vectorization, memory management. Weekend: Build high-performance data pipeline (1M records).",
          resources: [
            { name: "NumPy Vectorization Guide", url: "https://numpy.org/doc/stable/user/basics.broadcasting.html", type: "docs" },
            { name: "Python Profiling", url: "https://docs.python.org/3/library/profile.html", type: "docs" },
            { name: "High Performance Python Book", url: "https://www.oreilly.com/library/view/high-performance-python/9781492055013/", type: "book" },
            { name: "Memory Profiler", url: "https://pypi.org/project/memory-profiler/", type: "tool" },
            { name: "Python Performance Tips - mCoding", url: "https://www.youtube.com/watch?v=YY7yJHo0M5I", type: "video" },
            { name: "NumPy Performance - Enthought", url: "https://www.youtube.com/watch?v=EEUXKG97YRw", type: "video" }
          ],
          logicBuilding: {
            description: "Master performance optimization and complexity analysis for production ML systems",
            videoResources: [
              { name: "Big-O Notation Explained - CS Dojo", url: "https://www.youtube.com/watch?v=__vX2sjlpXU", type: "video", duration: "30 min" },
              { name: "Optimization Thinking - MIT", url: "https://www.youtube.com/watch?v=ybOttvTKKGQ", type: "video", duration: "45 min" },
              { name: "Vectorization Patterns - SciPy", url: "https://www.youtube.com/watch?v=EERSD-oukFQ", type: "video", duration: "35 min" }
            ],
            platforms: [
              { name: "LeetCode - Time Complexity", url: "https://leetcode.com/explore/learn/card/recursion-i/256/complexity-analysis/", type: "practice" },
              { name: "HackerRank - Optimization", url: "https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=strings", type: "practice" },
              { name: "Project Euler - Math Problems", url: "https://projecteuler.net/", type: "practice" }
            ],
            topics: [
              {
                topic: "Time Complexity Analysis",
                patterns: ["Big-O notation", "Best/Average/Worst case", "Amortized analysis", "Space-time tradeoffs"],
                problems: [
                  { difficulty: "easy", problem: "Identify O(n), O(n²), O(log n) in 5 code snippets", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Calculate operations: nested loops with different ranges", platform: "Complexity", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Compare: Linear search O(n) vs Binary search O(log n) on 1M items", platform: "Analysis", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Analyze recursive Fibonacci: Prove it's O(2^n) without memoization", platform: "LeetCode", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Space complexity: Iterative vs Recursive tree traversal comparison", platform: "Analysis", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Amortized analysis: Dynamic array resize operations", platform: "Theory", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Optimize O(n²) to O(n log n): Sort then binary search pattern", platform: "LeetCode", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Master Theorem: Analyze divide-and-conquer recurrences T(n) = aT(n/b) + f(n)", platform: "Advanced", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Prove quicksort average O(n log n), worst O(n²) with pivot analysis", platform: "Theory", estimatedTime: "50 min" }
                ]
              },
              {
                topic: "Code Optimization Patterns",
                patterns: ["Loop optimization", "Cache locality", "Lazy evaluation", "Early termination"],
                problems: [
                  { difficulty: "easy", problem: "Move invariant code outside loop: Optimize sum calculation", platform: "Custom", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Use list comprehension instead of append in loop (performance test)", platform: "Python", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Early return: Stop searching once target found", platform: "Pattern", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Cache results: Implement LRU cache decorator for expensive function", platform: "Real-world", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Optimize nested loops: Row-major vs column-major array access", platform: "NumPy", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Lazy evaluation: Use generator instead of list for memory efficiency", platform: "ML Pipeline", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "String concatenation: Optimize ''.join() vs += in loop (benchmark)", platform: "Performance", estimatedTime: "40 min" },
                  { difficulty: "hard", problem: "Cache locality: Optimize matrix multiplication memory access pattern", platform: "NumPy", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Memoization table: 2D DP with space optimization O(n²) → O(n)", platform: "Advanced", estimatedTime: "50 min" }
                ]
              },
              {
                topic: "Vectorization Logic",
                patterns: ["Broadcasting", "Eliminate loops", "NumPy operations", "Boolean masking"],
                problems: [
                  { difficulty: "easy", problem: "Replace loop: arr[i] = arr[i] * 2 with NumPy vectorization", platform: "NumPy", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Boolean mask: Filter array elements > threshold without loop", platform: "NumPy", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Broadcasting: Add row vector to each row of matrix", platform: "NumPy", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Vectorize nested loops: Distance matrix between all point pairs", platform: "ML-focused", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Conditional operations: np.where() instead of if-else in loop", platform: "NumPy", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Cumulative operations: Running sum with np.cumsum() vs loop", platform: "Time Series", estimatedTime: "25 min" },
                  { difficulty: "hard", problem: "Matrix operations: Implement k-means distance calculation vectorized", platform: "ML Algorithm", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Sliding window: Vectorize convolution operation for image processing", platform: "Computer Vision", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Broadcasting logic: Softmax function fully vectorized (no loops)", platform: "Deep Learning", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Memory Optimization",
                patterns: ["In-place operations", "Memory views", "Data types", "Garbage collection"],
                problems: [
                  { difficulty: "easy", problem: "In-place sort vs creating new array: Memory comparison", platform: "Python", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Choose data type: int8 vs int64 for array of values 0-255", platform: "NumPy", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "List slicing: Understand copy vs view behavior", platform: "Python", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Memory view: Process large array in chunks without copying", platform: "NumPy", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Generator chain: Process 10GB file with constant memory", platform: "Big Data", estimatedTime: "35 min" },
                  { difficulty: "medium", problem: "Object pooling: Reuse expensive objects instead of recreating", platform: "ML Training", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Memory profiling: Identify and fix memory leak in ML training loop", platform: "Production", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Sparse matrices: Optimize storage for 99% zero values", platform: "ML Advanced", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Streaming processing: Implement online algorithm for moving average", platform: "Real-time", estimatedTime: "50 min" }
                ]
              }
            ],
            dailyPractice: {
              description: "5 optimization problems daily to master performance analysis and efficient code",
              schedule: [
                { day: "Day 1", problems: [
                  { id: "w5d1p1", problem: "Identify Big-O in 5 snippets", difficulty: "easy", topic: "Complexity", time: "15 min" },
                  { id: "w5d1p2", problem: "Calculate nested loop operations", difficulty: "easy", topic: "Complexity", time: "15 min" },
                  { id: "w5d1p3", problem: "Move invariant code out of loop", difficulty: "easy", topic: "Optimization", time: "15 min" },
                  { id: "w5d1p4", problem: "Vectorize array multiplication", difficulty: "easy", topic: "Vectorization", time: "10 min" },
                  { id: "w5d1p5", problem: "In-place sort memory test", difficulty: "easy", topic: "Memory", time: "15 min" }
                ]},
                { day: "Day 2", problems: [
                  { id: "w5d2p1", problem: "Linear vs binary search", difficulty: "easy", topic: "Complexity", time: "20 min" },
                  { id: "w5d2p2", problem: "List comprehension optimization", difficulty: "easy", topic: "Optimization", time: "20 min" },
                  { id: "w5d2p3", problem: "Boolean mask filtering", difficulty: "easy", topic: "Vectorization", time: "15 min" },
                  { id: "w5d2p4", problem: "Choose int8 vs int64", difficulty: "easy", topic: "Memory", time: "20 min" },
                  { id: "w5d2p5", problem: "Early return pattern", difficulty: "easy", topic: "Optimization", time: "15 min" }
                ]},
                { day: "Day 3", problems: [
                  { id: "w5d3p1", problem: "Recursive Fibonacci O(2^n)", difficulty: "medium", topic: "Complexity", time: "25 min" },
                  { id: "w5d3p2", problem: "LRU cache decorator", difficulty: "medium", topic: "Optimization", time: "35 min" },
                  { id: "w5d3p3", problem: "Broadcasting row vector", difficulty: "easy", topic: "Vectorization", time: "20 min" },
                  { id: "w5d3p4", problem: "Copy vs view slicing", difficulty: "easy", topic: "Memory", time: "15 min" },
                  { id: "w5d3p5", problem: "Space complexity recursion", difficulty: "medium", topic: "Complexity", time: "30 min" }
                ]},
                { day: "Day 4", problems: [
                  { id: "w5d4p1", problem: "Amortized array resize", difficulty: "medium", topic: "Complexity", time: "30 min" },
                  { id: "w5d4p2", problem: "Row-major vs column-major", difficulty: "medium", topic: "Optimization", time: "30 min" },
                  { id: "w5d4p3", problem: "Vectorize distance matrix", difficulty: "medium", topic: "Vectorization", time: "35 min" },
                  { id: "w5d4p4", problem: "Memory view chunking", difficulty: "medium", topic: "Memory", time: "30 min" },
                  { id: "w5d4p5", problem: "Generator lazy evaluation", difficulty: "medium", topic: "Optimization", time: "30 min" }
                ]},
                { day: "Day 5", problems: [
                  { id: "w5d5p1", problem: "np.where conditional ops", difficulty: "medium", topic: "Vectorization", time: "25 min" },
                  { id: "w5d5p2", problem: "Generator chain 10GB file", difficulty: "medium", topic: "Memory", time: "35 min" },
                  { id: "w5d5p3", problem: "Cumulative sum np.cumsum", difficulty: "medium", topic: "Vectorization", time: "25 min" },
                  { id: "w5d5p4", problem: "Optimize O(n²) to O(n log n)", difficulty: "hard", topic: "Complexity", time: "40 min" },
                  { id: "w5d5p5", problem: "String join vs += benchmark", difficulty: "hard", topic: "Optimization", time: "40 min" }
                ]},
                { day: "Day 6", problems: [
                  { id: "w5d6p1", problem: "Master Theorem recurrences", difficulty: "hard", topic: "Complexity", time: "45 min" },
                  { id: "w5d6p2", problem: "Cache locality matrix mult", difficulty: "hard", topic: "Optimization", time: "50 min" },
                  { id: "w5d6p3", problem: "K-means distance vectorized", difficulty: "hard", topic: "Vectorization", time: "50 min" },
                  { id: "w5d6p4", problem: "Object pooling ML training", difficulty: "medium", topic: "Memory", time: "30 min" },
                  { id: "w5d6p5", problem: "2D DP space O(n²) → O(n)", difficulty: "hard", topic: "Optimization", time: "50 min" }
                ]},
                { day: "Day 7", problems: [
                  { id: "w5d7p1", problem: "Quicksort complexity proof", difficulty: "hard", topic: "Complexity", time: "50 min" },
                  { id: "w5d7p2", problem: "Vectorize convolution", difficulty: "hard", topic: "Vectorization", time: "50 min" },
                  { id: "w5d7p3", problem: "Memory leak profiling", difficulty: "hard", topic: "Memory", time: "50 min" },
                  { id: "w5d7p4", problem: "Softmax fully vectorized", difficulty: "hard", topic: "Vectorization", time: "45 min" },
                  { id: "w5d7p5", problem: "Sparse matrix optimization", difficulty: "hard", topic: "Memory", time: "45 min" }
                ]}
              ]
            },
            pseudocodeExercises: [
              { task: "Analyze algorithm: Identify bottlenecks, calculate Big-O, propose O(n) solution", estimatedTime: "30 min" },
              { task: "Design optimization strategy: Loop → Vectorization → Caching flow diagram", estimatedTime: "25 min" },
              { task: "Pseudocode: Memory-efficient online learning algorithm for streaming data", estimatedTime: "35 min" }
            ]
          },
          handsOn: [
            {
              rootTopic: "Profiling & Benchmarking",
              subTopics: ["cProfile", "line_profiler", "timeit", "memory_profiler"],
              exercises: [
                { difficulty: "medium", task: "Profile your StandardScaler.fit() using cProfile. Identify top 5 slowest functions. Generate visualization with snakeviz", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Use @profile decorator (line_profiler) on data loading function. Find which lines take most time. Optimize them", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Benchmark 3 implementations of same function: loop, list comprehension, NumPy vectorized. Plot performance vs data size", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Vectorization with NumPy",
              subTopics: ["Broadcasting", "Universal functions", "Boolean masking", "np.where"],
              exercises: [
                { difficulty: "medium", task: "Rewrite loop-based normalization: for i in range(len(arr)): arr[i] = (arr[i] - mean) / std → Use NumPy vectorization", xp: 50, estimatedHours: 1 },
                { difficulty: "medium", task: "Replace nested loops for distance matrix calculation with np.subtract.outer() and broadcasting. Test on 1000 points", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Implement KNN predict() using pure NumPy (no loops). Use broadcasting for distances, np.argsort for k-nearest", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Vectorize entire decision tree split finding: Calculate all possible splits across all features in one vectorized operation", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Memory Optimization",
              subTopics: ["dtypes", "Chunking", "Generators", "del and gc", "__slots__"],
              exercises: [
                { difficulty: "medium", task: "Load 1GB CSV: Change dtypes from float64→float32, int64→int32. Measure memory savings with memory_profiler", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Process 10M row CSV in chunks (100K rows/chunk). Calculate global statistics without loading all data", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Add __slots__ to DataPoint class. Compare memory usage of 1M objects with/without slots. Document savings", xp: 65, estimatedHours: 2 },
                { difficulty: "hard", task: "Build memory-efficient data loader: Yield batches from disk using mmap, keep only 2 batches in RAM at a time", xp: 75, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Parallel Processing",
              subTopics: ["multiprocessing", "ProcessPoolExecutor", "joblib", "numba"],
              exercises: [
                { difficulty: "hard", task: "Parallelize feature engineering: Use ProcessPoolExecutor to process 4 feature groups in parallel on 4 cores", xp: 70, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Use joblib to parallelize cross-validation: 5-fold CV runs in parallel instead of sequentially. Measure speedup", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Add @numba.jit decorator to distance calculation function. Compare speed: pure Python vs NumPy vs Numba", xp: 85, estimatedHours: 3.5 }
              ]
            },
            {
              rootTopic: "Algorithm Optimization",
              subTopics: ["Time complexity", "Space complexity", "Data structures", "Caching"],
              exercises: [
                { difficulty: "medium", task: "Replace list search (O(n)) with dict lookup (O(1)) in feature name mapping. Benchmark on 10K lookups", xp: 45, estimatedHours: 1 },
                { difficulty: "hard", task: "Optimize duplicate detection: Replace nested loop O(n²) with set-based approach O(n). Test on 100K records", xp: 65, estimatedHours: 2 },
                { difficulty: "hard", task: "Implement LRU cache for expensive feature transformations. Show 10x speedup on repeated calls", xp: 70, estimatedHours: 2.5 }
              ]
            }
          ],
          weekendProject: {
            name: "High-Performance ETL Pipeline",
            duration: "10 hours",
            description: "Build production-grade pipeline processing 1M records with <5 second runtime",
            requirements: [
              "Load 1M row CSV in chunks (memory efficient, <500MB RAM usage)",
              "Apply 10 feature transformations using vectorized NumPy operations",
              "Parallel processing: 4 worker processes for feature engineering",
              "Write optimized output: Use pyarrow/parquet instead of CSV",
              "Profile entire pipeline: Identify and fix bottlenecks",
              "Achieve <5 second total runtime (load → transform → save)",
              "Memory profiling: Show peak memory <500MB for 1M rows",
              "Benchmarking report: Compare original vs optimized (time & memory)",
              "Type hints, tests, logging, documentation"
            ],
            techStack: "Python, NumPy, Pandas, multiprocessing, pyarrow, cProfile, memory_profiler",
            evaluation: "Processes 1M rows in <5 seconds, uses <500MB RAM, all tests pass",
            portfolioValue: "Shows: Performance optimization, profiling, parallel processing, production engineering"
          }
        },
        {
          weekNum: 6,
          title: "Complete Data Science Stack",
          goal: "Matplotlib, Seaborn, exploratory analysis",
          hoursThisWeek: 30,
          summary: "Data visualization, statistical analysis. Weekend: **CAPSTONE**: Complete Kaggle competition entry with full pipeline.",
          resources: [
            { name: "Matplotlib Official Guide", url: "https://matplotlib.org/stable/tutorials/index.html", type: "docs" },
            { name: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html", type: "docs" },
            { name: "Kaggle Data Visualization", url: "https://www.kaggle.com/learn/data-visualization", type: "interactive" },
            { name: "Python Graph Gallery", url: "https://www.python-graph-gallery.com/", type: "reference" },
            { name: "Matplotlib Complete Tutorial - Corey Schafer", url: "https://www.youtube.com/watch?v=UO98lJQ3QGI&list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_", type: "video" },
            { name: "Seaborn Tutorial - Keith Galli", url: "https://www.youtube.com/watch?v=6GUZXDef2U0", type: "video" }
          ],
          logicBuilding: {
            description: "Master chart selection, statistical interpretation, and visualization design patterns",
            videoResources: [
              { name: "Chart Selection Logic - Storytelling with Data", url: "https://www.youtube.com/watch?v=8EMW7io4rSI", type: "video", duration: "30 min" },
              { name: "Statistical Thinking - StatQuest", url: "https://www.youtube.com/watch?v=qBigTkBLU6g", type: "video", duration: "35 min" },
              { name: "Design Principles for Data Viz", url: "https://www.youtube.com/watch?v=vTingdk_pVM", type: "video", duration: "25 min" }
            ],
            platforms: [
              { name: "Kaggle - Visualization Kernels", url: "https://www.kaggle.com/learn/data-visualization", type: "practice" },
              { name: "Makeover Monday", url: "https://www.makeovermonday.co.uk/", type: "practice" },
              { name: "Data Viz Challenges", url: "https://www.reddit.com/r/dataisbeautiful/", type: "inspiration" }
            ],
            topics: [
              {
                topic: "Chart Selection Logic",
                patterns: ["Distribution", "Comparison", "Relationship", "Composition"],
                problems: [
                  { difficulty: "easy", problem: "Choose chart: Single variable distribution (Age of 1000 people)", platform: "Theory", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Choose chart: Compare sales across 5 regions", platform: "Business", estimatedTime: "10 min" },
                  { difficulty: "easy", problem: "Choose chart: Show relationship between study hours and exam scores", platform: "Education", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Multi-variable: Age distribution by gender (2 variables)", platform: "Demographics", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Time series: Stock price over 1 year with volume", platform: "Finance", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Composition: Market share of 10 products over 4 quarters", platform: "Business", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Multi-dimensional: Sales by Region, Product, Quarter (3D data)", platform: "Advanced", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Choose visualization: Network of social connections (graph data)", platform: "Network", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Geographic: COVID cases by country on world map with time slider", platform: "Geospatial", estimatedTime: "40 min" }
                ]
              },
              {
                topic: "Statistical Interpretation",
                patterns: ["Central tendency", "Spread", "Outliers", "Correlation"],
                problems: [
                  { difficulty: "easy", problem: "Interpret boxplot: Identify median, Q1, Q3, outliers", platform: "Stats", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Read histogram: Determine if distribution is normal, skewed, or bimodal", platform: "Stats", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Scatter plot: Identify positive/negative/no correlation visually", platform: "Stats", estimatedTime: "10 min" },
                  { difficulty: "medium", problem: "Violin plot: Compare distributions of 4 groups, identify differences", platform: "ML EDA", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Heatmap: Interpret correlation matrix (10 variables), find multicollinearity", platform: "ML Feature Selection", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Pair plot: Analyze relationships between 5 features, spot patterns", platform: "Seaborn", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Residual plot: Detect heteroscedasticity in regression model", platform: "ML Diagnostics", estimatedTime: "35 min" },
                  { difficulty: "hard", problem: "Q-Q plot: Test normality assumption for multiple variables", platform: "Statistics", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "PCA biplot: Interpret principal components and variable loadings", platform: "Dimensionality Reduction", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "Design Patterns",
                patterns: ["Color theory", "Layout", "Annotations", "Accessibility"],
                problems: [
                  { difficulty: "easy", problem: "Choose color palette: Sequential, diverging, or categorical for temperature data", platform: "Design", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Add title, axis labels, and legend to basic line plot", platform: "Matplotlib", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Highlight specific data point with annotation arrow", platform: "Matplotlib", estimatedTime: "20 min" },
                  { difficulty: "medium", problem: "Subplot layout: 4 charts in 2x2 grid with shared axes", platform: "Dashboard", estimatedTime: "25 min" },
                  { difficulty: "medium", problem: "Colorblind-friendly palette: Test with 3 types of color blindness", platform: "Accessibility", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Interactive elements: Add hover tooltips and zoom to plot", platform: "Plotly", estimatedTime: "30 min" },
                  { difficulty: "hard", problem: "Dashboard design: 6-chart layout with consistent theme and hierarchy", platform: "Business Intelligence", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Storytelling viz: Guide viewer through 3-act narrative with annotations", platform: "Presentation", estimatedTime: "50 min" },
                  { difficulty: "hard", problem: "Responsive design: Visualization adapts to mobile, tablet, desktop", platform: "Web", estimatedTime: "45 min" }
                ]
              },
              {
                topic: "EDA Workflows",
                patterns: ["Univariate analysis", "Bivariate analysis", "Multivariate", "Feature insights"],
                problems: [
                  { difficulty: "easy", problem: "Create 5-number summary visualization for Age variable", platform: "Pandas", estimatedTime: "15 min" },
                  { difficulty: "easy", problem: "Visualize missing data: Heatmap showing nulls by column", platform: "EDA", estimatedTime: "20 min" },
                  { difficulty: "easy", problem: "Count plot: Frequency of categorical variable (Pclass)", platform: "Seaborn", estimatedTime: "15 min" },
                  { difficulty: "medium", problem: "Bivariate: Survival rate by Age group (binned) with confidence intervals", platform: "Kaggle", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Facet grid: Compare distributions across multiple categories", platform: "Seaborn", estimatedTime: "30 min" },
                  { difficulty: "medium", problem: "Feature importance: Visualize correlation with target variable", platform: "ML EDA", estimatedTime: "25 min" },
                  { difficulty: "hard", problem: "Comprehensive EDA: 12-chart report for Titanic dataset", platform: "Project", estimatedTime: "60 min" },
                  { difficulty: "hard", problem: "Interaction effects: 3-way relationship (Age, Fare, Survival by Sex)", platform: "Advanced EDA", estimatedTime: "45 min" },
                  { difficulty: "hard", problem: "Time-series decomposition: Trend, seasonality, residuals visualization", platform: "Forecasting", estimatedTime: "50 min" }
                ]
              }
            ],
            dailyPractice: {
              description: "5 visualization design problems daily to master chart selection and statistical interpretation",
              schedule: [
                { day: "Day 1", problems: [
                  { id: "w6d1p1", problem: "Chart for Age distribution", difficulty: "easy", topic: "Selection", time: "10 min" },
                  { id: "w6d1p2", problem: "Chart for sales comparison", difficulty: "easy", topic: "Selection", time: "10 min" },
                  { id: "w6d1p3", problem: "Interpret boxplot", difficulty: "easy", topic: "Interpretation", time: "15 min" },
                  { id: "w6d1p4", problem: "Color palette for temperature", difficulty: "easy", topic: "Design", time: "15 min" },
                  { id: "w6d1p5", problem: "5-number summary viz", difficulty: "easy", topic: "EDA", time: "15 min" }
                ]},
                { day: "Day 2", problems: [
                  { id: "w6d2p1", problem: "Chart for hours vs scores", difficulty: "easy", topic: "Selection", time: "15 min" },
                  { id: "w6d2p2", problem: "Read histogram distribution", difficulty: "easy", topic: "Interpretation", time: "15 min" },
                  { id: "w6d2p3", problem: "Add title, labels, legend", difficulty: "easy", topic: "Design", time: "15 min" },
                  { id: "w6d2p4", problem: "Missing data heatmap", difficulty: "easy", topic: "EDA", time: "20 min" },
                  { id: "w6d2p5", problem: "Scatter plot correlation", difficulty: "easy", topic: "Interpretation", time: "10 min" }
                ]},
                { day: "Day 3", problems: [
                  { id: "w6d3p1", problem: "Age by gender chart", difficulty: "medium", topic: "Selection", time: "20 min" },
                  { id: "w6d3p2", problem: "Violin plot comparison", difficulty: "medium", topic: "Interpretation", time: "25 min" },
                  { id: "w6d3p3", problem: "Annotate data point", difficulty: "easy", topic: "Design", time: "20 min" },
                  { id: "w6d3p4", problem: "Count plot Pclass", difficulty: "easy", topic: "EDA", time: "15 min" },
                  { id: "w6d3p5", problem: "Stock price time series", difficulty: "medium", topic: "Selection", time: "25 min" }
                ]},
                { day: "Day 4", problems: [
                  { id: "w6d4p1", problem: "Correlation heatmap analysis", difficulty: "medium", topic: "Interpretation", time: "30 min" },
                  { id: "w6d4p2", problem: "2x2 subplot grid", difficulty: "medium", topic: "Design", time: "25 min" },
                  { id: "w6d4p3", problem: "Survival by age group", difficulty: "medium", topic: "EDA", time: "30 min" },
                  { id: "w6d4p4", problem: "Market share composition", difficulty: "medium", topic: "Selection", time: "30 min" },
                  { id: "w6d4p5", problem: "Pair plot analysis", difficulty: "medium", topic: "Interpretation", time: "30 min" }
                ]},
                { day: "Day 5", problems: [
                  { id: "w6d5p1", problem: "Colorblind-friendly test", difficulty: "medium", topic: "Design", time: "30 min" },
                  { id: "w6d5p2", problem: "Facet grid distributions", difficulty: "medium", topic: "EDA", time: "30 min" },
                  { id: "w6d5p3", problem: "3D data visualization", difficulty: "hard", topic: "Selection", time: "35 min" },
                  { id: "w6d5p4", problem: "Residual plot analysis", difficulty: "hard", topic: "Interpretation", time: "35 min" },
                  { id: "w6d5p5", problem: "Interactive hover tooltips", difficulty: "medium", topic: "Design", time: "30 min" }
                ]},
                { day: "Day 6", problems: [
                  { id: "w6d6p1", problem: "Feature importance viz", difficulty: "medium", topic: "EDA", time: "25 min" },
                  { id: "w6d6p2", problem: "Network graph connections", difficulty: "hard", topic: "Selection", time: "30 min" },
                  { id: "w6d6p3", problem: "Q-Q plot normality", difficulty: "hard", topic: "Interpretation", time: "30 min" },
                  { id: "w6d6p4", problem: "6-chart dashboard layout", difficulty: "hard", topic: "Design", time: "45 min" },
                  { id: "w6d6p5", problem: "Comprehensive EDA report", difficulty: "hard", topic: "EDA", time: "60 min" }
                ]},
                { day: "Day 7", problems: [
                  { id: "w6d7p1", problem: "Geographic COVID map", difficulty: "hard", topic: "Selection", time: "40 min" },
                  { id: "w6d7p2", problem: "PCA biplot interpretation", difficulty: "hard", topic: "Interpretation", time: "45 min" },
                  { id: "w6d7p3", problem: "3-act narrative storytelling", difficulty: "hard", topic: "Design", time: "50 min" },
                  { id: "w6d7p4", problem: "3-way interaction effects", difficulty: "hard", topic: "EDA", time: "45 min" },
                  { id: "w6d7p5", problem: "Time-series decomposition", difficulty: "hard", topic: "EDA", time: "50 min" }
                ]}
              ]
            },
            pseudocodeExercises: [
              { task: "Decision tree: Choose chart type based on data characteristics (flow diagram)", estimatedTime: "25 min" },
              { task: "Pseudocode: Automated EDA pipeline that generates 10 visualizations", estimatedTime: "30 min" },
              { task: "Design system: Color palette, fonts, layout rules for dashboard consistency", estimatedTime: "25 min" }
            ]
          },
          handsOn: [
            {
              rootTopic: "Matplotlib Fundamentals",
              subTopics: ["Figure & Axes", "Line plots", "Scatter plots", "Bar charts", "Customization"],
              exercises: [
                { difficulty: "easy", task: "Create line plot: Plot Age distribution across Titanic passengers. Add title, xlabel, ylabel, grid, legend", xp: 30, estimatedHours: 0.5 },
                { difficulty: "medium", task: "Create 2x2 subplot grid: Show 4 distributions (Age, Fare, Pclass, Survived) with different plot types", xp: 45, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Scatter plot with colors: Fare vs Age, color by Survived, size by Pclass, add colorbar and annotations", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Create custom visualization class that wraps matplotlib for consistent styling across all plots in project", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Seaborn Statistical Plots",
              subTopics: ["distplot/histplot", "boxplot", "violinplot", "pairplot", "heatmap"],
              exercises: [
                { difficulty: "easy", task: "Create histogram: Age distribution with KDE overlay. Separate by Survived (2 overlapping distributions)", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Box plots: Compare Fare across Pclass (3 boxes). Identify outliers. Add swarm plot overlay for individual points", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Pair plot: Show relationships between Age, Fare, SibSp, Parch. Color by Survived. Add regression lines", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Correlation heatmap: All numeric features, annotate with values, use diverging colormap, cluster rows/cols", xp: 60, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Advanced Visualizations",
              subTopics: ["FacetGrid", "catplot", "jointplot", "PairGrid", "Custom plots"],
              exercises: [
                { difficulty: "hard", task: "FacetGrid: Create 3x2 grid (Pclass x Sex), show Age histograms in each cell, color by Survived", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Joint plot: Age vs Fare with marginal distributions (histograms on sides), add regression line and confidence interval", xp: 60, estimatedHours: 2 },
                { difficulty: "expert", task: "Custom dashboard: 6-plot layout showing complete EDA (distributions, correlations, survival rates, missing values)", xp: 80, estimatedHours: 3.5 }
              ]
            },
            {
              rootTopic: "Interactive Visualizations",
              subTopics: ["Plotly", "Widgets", "Animations", "Dashboards"],
              exercises: [
                { difficulty: "medium", task: "Create interactive scatter plot with Plotly: Hover shows passenger details, click filters by class", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Build Plotly dashboard: 4 linked plots (click on one filters others). Show survival analysis from multiple angles", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Create animated visualization: Show how survival rate changes across Age bins, animate through Pclass levels", xp: 85, estimatedHours: 3.5 }
              ]
            },
            {
              rootTopic: "Statistical Analysis",
              subTopics: ["scipy.stats", "Hypothesis testing", "Confidence intervals", "Effect sizes"],
              exercises: [
                { difficulty: "medium", task: "T-test: Compare mean Age between survivors and non-survivors. Calculate p-value, interpret results", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Chi-square test: Test independence between Sex and Survived. Create contingency table, visualize with heatmap", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "ANOVA: Compare Fare across 3 Pclass levels. Post-hoc tests if significant. Visualize with box plots + significance bars", xp: 70, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Bootstrap confidence intervals: Calculate 95% CI for survival rate in each Pclass. Plot with error bars", xp: 75, estimatedHours: 3 }
              ]
            }
          ],
          weekendProject: {
            name: "Phase 1 Capstone: Complete Kaggle Competition Entry",
            duration: "16 hours",
            description: "Full ML pipeline from raw data to Kaggle submission with complete EDA and feature engineering",
            requirements: [
              "Choose competition: Titanic, House Prices, or Spaceship Titanic",
              "Complete EDA notebook: 20+ visualizations showing insights",
              "Feature engineering: Create 15+ derived features",
              "Data preprocessing: Handle missing values, outliers, encode categoricals",
              "Build Pipeline: Compose all transformers from Week 2 OOP project",
              "Model training: Try 3+ algorithms (LogisticRegression, RandomForest, GradientBoosting)",
              "Cross-validation: 5-fold CV with proper scoring metrics",
              "Hyperparameter tuning: GridSearchCV or RandomizedSearchCV",
              "Make predictions on test set, create submission.csv",
              "Submit to Kaggle: Get score, compare with leaderboard",
              "Production code: All code in .py modules (not just notebooks)",
              "Tests: 80%+ coverage of all pipeline components",
              "Documentation: README with approach, results, what worked/didn't",
              "Git repo: Clean commit history showing iterative development"
            ],
            techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Jupyter, Git",
            evaluation: "Kaggle submission score in top 50%, production-ready code, comprehensive EDA",
            portfolioValue: "Shows: Complete ML workflow, EDA skills, feature engineering, model selection, production code",
            successMetrics: [
              "Kaggle score: Top 50% of leaderboard",
              "Code quality: Passes all tests, type hints, formatted",
              "Documentation: Clear README, notebook with insights",
              "Git: 20+ commits showing progress"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "ML Fundamentals",
      weeks: 4,
      hoursPerWeek: 35,
      color: "from-purple-500 to-pink-500",
      icon: Brain,
      description: "Classical ML + Neural Networks from scratch",
      skillProgress: "ML Theory → Practical Implementation | Can build & deploy ML models",
      projects: [
        { name: "Linear Regression from Scratch", week: 7, tech: "Python, NumPy, Matplotlib" },
        { name: "Scikit-learn Pipeline", week: 8, tech: "sklearn, pandas" },
        { name: "Neural Network from Scratch", week: 9, tech: "NumPy (no frameworks)" },
        { name: "Image Classifier", week: 10, tech: "PyTorch, CNNs" }
      ],
      weeks_detail: [
        {
          weekNum: 7,
          title: "ML Foundations + Regression",
          goal: "Understand ML math, build from scratch",
          hoursThisWeek: 35,
          summary: "Linear/Logistic regression (math + code), gradient descent, cost functions. Weekend: Implement both from scratch, compare with sklearn.",
          resources: [
            { name: "Andrew Ng - ML Course (Coursera)", url: "https://www.coursera.org/learn/machine-learning", type: "course" },
            { name: "3Blue1Brown - Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "video" },
            { name: "StatQuest - Gradient Descent", url: "https://www.youtube.com/watch?v=sDv4f4s2SB8", type: "video" },
            { name: "Scikit-learn Linear Models", url: "https://scikit-learn.org/stable/modules/linear_model.html", type: "docs" }
          ]
        },
        {
          weekNum: 8,
          title: "Scikit-learn Mastery",
          goal: "Production ML with sklearn",
          hoursThisWeek: 35,
          summary: "Pipelines, cross-validation, hyperparameter tuning, model selection. Weekend: Kaggle competition submission.",
          resources: [
            { name: "Scikit-learn Official Tutorial", url: "https://scikit-learn.org/stable/tutorial/index.html", type: "docs" },
            { name: "Kaggle Learn - Intro to ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning", type: "interactive" },
            { name: "Pipeline Tutorial", url: "https://scikit-learn.org/stable/modules/compose.html", type: "docs" },
            { name: "Hyperparameter Tuning Guide", url: "https://scikit-learn.org/stable/modules/grid_search.html", type: "docs" }
          ]
        },
        {
          weekNum: 9,
          title: "Neural Networks from Scratch",
          goal: "Build NN with pure NumPy (understand backprop)",
          hoursThisWeek: 38,
          summary: "Forward prop, backprop, activation functions, optimization. Weekend: Implement multi-layer NN, train on MNIST.",
          resources: [
            { name: "3Blue1Brown - Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video" },
            { name: "Michael Nielsen - Neural Networks Book", url: "http://neuralnetworksanddeeplearning.com/", type: "book" },
            { name: "Andrej Karpathy - Building Micrograd", url: "https://www.youtube.com/watch?v=VMj-3S1tku0", type: "video" },
            { name: "MNIST Dataset", url: "http://yann.lecun.com/exdb/mnist/", type: "dataset" }
          ]
        },
        {
          weekNum: 10,
          title: "Deep Learning with PyTorch",
          goal: "Modern DL framework, CNNs, transfer learning",
          hoursThisWeek: 36,
          summary: "PyTorch basics, build CNNs, transfer learning. Weekend: Image classifier (your own dataset).",
          resources: [
            { name: "PyTorch Official Tutorial", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html", type: "docs" },
            { name: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai/", type: "course" },
            { name: "Stanford CS231n - CNNs", url: "https://cs231n.github.io/", type: "course" },
            { name: "PyTorch Image Models (timm)", url: "https://github.com/huggingface/pytorch-image-models", type: "tool" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "LLMs & Modern AI Stack",
      weeks: 6,
      hoursPerWeek: 38,
      color: "from-green-500 to-teal-500",
      icon: Zap,
      description: "Transformers, RAG, Agents, Production deployment",
      skillProgress: "Theory → Production Gen AI Systems | Ready for CEO interviews",
      projects: [
        { name: "Mini-GPT from Scratch", week: 11, tech: "PyTorch, Transformers" },
        { name: "Multi-tool Chatbot", week: 12, tech: "OpenAI API, Function calling" },
        { name: "RAG System from Scratch", week: 13, tech: "OpenAI, ChromaDB" },
        { name: "Production RAG (TCS Banking Docs)", week: 14, tech: "LangChain, Pinecone, FastAPI" },
        { name: "Autonomous Research Agent", week: 15, tech: "LangGraph, Tools, Memory" },
        { name: "Deployed Gen AI API", week: 16, tech: "Docker, GCP, CI/CD, Monitoring" }
      ],
      weeks_detail: [
        {
          weekNum: 11,
          title: "Transformer Architecture Deep Dive",
          goal: "NEVER freeze on 'explain transformers' again",
          hoursThisWeek: 40,
          summary: "Attention mechanism (code from scratch), positional encoding, encoder/decoder. Weekend: Build mini-GPT following Karpathy tutorial.",
          resources: [
            { name: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762", type: "paper" },
            { name: "Andrej Karpathy - Let's Build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", type: "video" },
            { name: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", type: "article" },
            { name: "Hugging Face Transformers Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1", type: "course" },
            { name: "Stanford CS224N - Attention Mechanisms", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy", type: "video", note: "Watch Lectures 6-8" },
            { name: "Stanford CS224N - Transformers", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy", type: "video", note: "Watch Lectures 9-10" },
            { name: "Transformer from Scratch - Aladdin Persson", url: "https://www.youtube.com/watch?v=U0s0f995w14", type: "video" }
          ],
          handsOn: [
            {
              rootTopic: "Attention Mechanism",
              subTopics: ["Query-Key-Value", "Scaled Dot-Product", "Multi-Head Attention", "Self-Attention"],
              exercises: [
                { difficulty: "medium", task: "Implement scaled dot-product attention from scratch: attention = softmax(Q @ K.T / sqrt(d_k)) @ V. Test on dummy data", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Build multi-head attention: Split into h heads, compute attention for each, concatenate. Compare with single-head", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Implement self-attention for sequence: Input is same sequence for Q, K, V. Visualize attention weights as heatmap", xp: 70, estimatedHours: 2.5 },
                { difficulty: "expert", task: "Add masking for decoder: Prevent attending to future tokens. Implement causal mask (lower triangular matrix)", xp: 85, estimatedHours: 3.5 }
              ]
            },
            {
              rootTopic: "Positional Encoding",
              subTopics: ["Sinusoidal encoding", "Learned embeddings", "Position representation"],
              exercises: [
                { difficulty: "medium", task: "Implement sinusoidal positional encoding: PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(...)", xp: 55, estimatedHours: 2 },
                { difficulty: "medium", task: "Visualize positional encodings: Plot 128 positions x 512 dimensions as heatmap. Observe the patterns", xp: 40, estimatedHours: 1 },
                { difficulty: "hard", task: "Compare learned vs sinusoidal: Train small model with both, measure which generalizes to longer sequences", xp: 70, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Transformer Encoder",
              subTopics: ["Multi-head attention", "Feed-forward network", "Layer normalization", "Residual connections"],
              exercises: [
                { difficulty: "hard", task: "Build encoder layer: MHA → Add & Norm → FFN → Add & Norm. Use PyTorch nn.Module", xp: 80, estimatedHours: 3.5 },
                { difficulty: "hard", task: "Stack 6 encoder layers. Add dropout between layers. Test on sentence classification task", xp: 85, estimatedHours: 4 },
                { difficulty: "expert", task: "Implement encoder with configurable: num_layers, d_model, num_heads, d_ff. Match BERT-base architecture", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Transformer Decoder",
              subTopics: ["Masked attention", "Cross-attention", "Auto-regressive generation"],
              exercises: [
                { difficulty: "hard", task: "Build decoder layer: Masked MHA → Add & Norm → Cross-attention (to encoder) → Add & Norm → FFN → Add & Norm", xp: 90, estimatedHours: 4 },
                { difficulty: "expert", task: "Implement auto-regressive generation: Start with [START], predict next token, append, repeat until [END]", xp: 100, estimatedHours: 5 },
                { difficulty: "expert", task: "Add temperature, top-k, top-p sampling to generation. Compare outputs with different sampling strategies", xp: 85, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Training Transformers",
              subTopics: ["Learning rate scheduling", "Warmup", "Label smoothing", "Gradient clipping"],
              exercises: [
                { difficulty: "hard", task: "Implement learning rate warmup: Linear increase for first 4000 steps, then inverse sqrt decay", xp: 65, estimatedHours: 2 },
                { difficulty: "hard", task: "Add label smoothing: Instead of hard 0/1 targets, use 0.1/0.9. Compare training stability", xp: 60, estimatedHours: 2 },
                { difficulty: "expert", task: "Full training loop: Train small transformer on tiny dataset (e.g., date conversion). Monitor loss, perplexity", xp: 100, estimatedHours: 6 }
              ]
            }
          ],
          weekendProject: {
            name: "Mini-GPT from Scratch (Karpathy Tutorial)",
            duration: "12 hours",
            description: "Follow Andrej Karpathy's tutorial to build GPT from scratch, understand every line",
            requirements: [
              "Watch Karpathy's 'Let's build GPT' video (2.5 hours)",
              "Implement character-level GPT: Tokenization, embeddings, transformer blocks",
              "Train on Shakespeare dataset (or similar small corpus)",
              "Implement: Multi-head self-attention, position embeddings, MLP, layer norm",
              "Training: Cross-entropy loss, AdamW optimizer, learning rate scheduling",
              "Generation: Auto-regressive sampling with temperature control",
              "Achieve coherent text generation (even if not perfect)",
              "Document each component: What it does, why it's needed",
              "Compare with Stanford CS224N lectures: Note differences in implementation",
              "Add type hints, tests for attention mechanism"
            ],
            techStack: "PyTorch, NumPy, Jupyter",
            evaluation: "Model generates coherent Shakespeare-style text, all components understood",
            portfolioValue: "Shows: Deep understanding of transformers, ability to implement papers, PyTorch mastery",
            stanfordLectures: [
              "Lecture 6: Neural Machine Translation, Seq2Seq, Attention",
              "Lecture 7: Translation, Seq2Seq, Attention (continued)",
              "Lecture 8: Self-Attention and Transformers",
              "Lecture 9: Transformers and Pretraining",
              "Lecture 10: More about Transformers and Pretraining"
            ]
          }
        },
        {
          weekNum: 12,
          title: "LLM APIs & Prompt Engineering",
          goal: "Master OpenAI/Claude APIs, understand parameters",
          hoursThisWeek: 38,
          summary: "Temperature, top_p, function calling, streaming, error handling. Weekend: Build multi-functional chatbot.",
          resources: [
            { name: "OpenAI API Documentation", url: "https://platform.openai.com/docs/introduction", type: "docs" },
            { name: "OpenAI Cookbook", url: "https://github.com/openai/openai-cookbook", type: "github" },
            { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", type: "guide" },
            { name: "Function Calling Tutorial", url: "https://platform.openai.com/docs/guides/function-calling", type: "docs" },
            { name: "Stanford CS224N - Language Models", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy", type: "video", note: "Watch Lectures 11-13" },
            { name: "Prompt Engineering - OpenAI DevDay", url: "https://www.youtube.com/watch?v=ahnGLM-RC1Y", type: "video" }
          ],
          handsOn: [
            {
              rootTopic: "LLM Parameters Understanding",
              subTopics: ["Temperature", "top_p", "top_k", "max_tokens", "frequency_penalty"],
              exercises: [
                { difficulty: "easy", task: "Test temperature: Generate same prompt 10 times with temp=0, 0.5, 1.0, 2.0. Observe creativity vs consistency", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Compare top_p vs temperature: Generate text with different combinations. Document when to use each", xp: 45, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Build parameter playground: Streamlit app with sliders for all parameters. Real-time generation", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Analyze frequency_penalty: Test on code generation (reduce repetition) vs creative writing. Find optimal values", xp: 55, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Prompt Engineering Techniques",
              subTopics: ["Few-shot learning", "Chain-of-thought", "ReAct prompting", "System messages"],
              exercises: [
                { difficulty: "medium", task: "Implement few-shot classifier: Give 3 examples, classify new inputs. Test on sentiment, intent detection", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Chain-of-thought: Add 'Let's think step by step' for math problems. Compare accuracy with/without CoT", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Build prompt template system: Variables, conditional sections, output parsing. Like LangChain PromptTemplate", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Auto-optimize prompts: Generate variations, test on eval set, find best performing prompt automatically", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Function Calling",
              subTopics: ["Tool definition", "JSON schema", "Function execution", "Error handling"],
              exercises: [
                { difficulty: "medium", task: "Define 3 functions: get_weather(city), calculate_tip(bill, percent), search_wikipedia(query). Test with OpenAI", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Build calculator chatbot: Parse user intent, call appropriate function (add, multiply, etc), return result", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Multi-step function calling: User asks complex query requiring 2-3 sequential function calls to answer", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Build TCS banking assistant: Functions for balance, transactions, transfers. Handle authentication, validation", xp: 100, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Streaming & Error Handling",
              subTopics: ["Server-sent events", "Token-by-token", "Retry logic", "Rate limiting"],
              exercises: [
                { difficulty: "medium", task: "Implement streaming: Display tokens as they arrive (like ChatGPT). Use async/await", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Add retry logic with exponential backoff: Retry on 429, 500, 503 errors. Max 3 retries", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Rate limiting: Track tokens/minute, queue requests if limit reached. Use Redis for distributed tracking", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Build production LLM client: Retries, rate limiting, caching, cost tracking, token counting, error handling", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Cost Optimization",
              subTopics: ["Token counting", "Caching", "Prompt compression", "Model selection"],
              exercises: [
                { difficulty: "medium", task: "Build token counter: Estimate cost before API call. Use tiktoken library. Alert if >1000 tokens", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Implement semantic caching: Hash prompt, check cache (Redis), return cached response if exists", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Prompt compression: Summarize long context before sending to LLM. Measure token savings vs quality loss", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Smart model routing: Use GPT-4 for complex, GPT-3.5 for simple. Auto-classify query difficulty", xp: 85, estimatedHours: 4 }
              ]
            }
          ],
          weekendProject: {
            name: "Multi-Tool AI Assistant",
            duration: "10 hours",
            description: "Build chatbot with 10+ tools using function calling, streaming, error handling",
            requirements: [
              "10+ functions: Weather, Wikipedia, calculator, unit conversion, timezone, currency, stocks, etc.",
              "Function calling: LLM decides which tool to use based on user query",
              "Streaming responses: Show tokens in real-time",
              "Error handling: Graceful failures, retry logic",
              "Cost tracking: Log tokens used, estimate cost per conversation",
              "Semantic caching: Cache responses for similar queries (90% similarity)",
              "Rate limiting: Respect OpenAI rate limits",
              "Conversation memory: Remember last 5 messages for context",
              "UI: Streamlit or Gradio for chat interface",
              "Logging: Track all API calls, responses, errors, costs"
            ],
            techStack: "OpenAI API, Streamlit, Redis, tiktoken",
            evaluation: "Bot handles 10+ different query types, streaming works, costs <$0.10 per conversation",
            portfolioValue: "Shows: API mastery, function calling, production practices, cost awareness",
            stanfordLectures: [
              "Lecture 11: Question Answering",
              "Lecture 12: Natural Language Generation",
              "Lecture 13: Contextual Word Embeddings"
            ]
          }
        },
        {
          weekNum: 13,
          title: "RAG Fundamentals",
          goal: "Build RAG without frameworks (understand internals)",
          hoursThisWeek: 38,
          summary: "Embeddings, vector search, ChromaDB, chunking strategies. Weekend: Document Q&A system (no LangChain).",
          resources: [
            { name: "OpenAI Embeddings Guide", url: "https://platform.openai.com/docs/guides/embeddings", type: "docs" },
            { name: "ChromaDB Documentation", url: "https://docs.trychroma.com/", type: "docs" },
            { name: "Building RAG from Scratch", url: "https://www.youtube.com/watch?v=sVcwVQRHIc8", type: "video" },
            { name: "RAG Paper (Lewis et al.)", url: "https://arxiv.org/abs/2005.11401", type: "paper" },
            { name: "Stanford CS224N - Word Vectors", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy", type: "video", note: "Watch Lectures 1-2" },
            { name: "Stanford CS224N - Information Retrieval", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy", type: "video", note: "Watch Lecture 14" },
            { name: "RAG Tutorial - LangChain", url: "https://www.youtube.com/watch?v=tcqEUSNCn8I", type: "video" }
          ],
          handsOn: [
            {
              rootTopic: "Embeddings",
              subTopics: ["Text embeddings", "Cosine similarity", "Semantic search", "Embedding models"],
              exercises: [
                { difficulty: "easy", task: "Generate embeddings for 100 sentences using OpenAI. Store in NumPy array. Visualize with t-SNE/UMAP in 2D", xp: 40, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Implement cosine similarity: Find 5 most similar sentences to query. Compare with string matching (Levenshtein)", xp: 50, estimatedHours: 2 },
                { difficulty: "medium", task: "Build semantic search: Embed 1000 documents, search with natural language queries. Compare search quality vs keyword search", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Compare embedding models: OpenAI ada-002, sentence-transformers, instructor-xl. Benchmark on retrieval accuracy", xp: 70, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Vector Databases",
              subTopics: ["ChromaDB", "FAISS", "Pinecone", "Indexing strategies"],
              exercises: [
                { difficulty: "medium", task: "Set up ChromaDB: Create collection, add 100 docs with embeddings, query with filters (metadata)", xp: 45, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Implement FAISS index: Use IndexFlatL2 for exact search, then IndexIVFFlat for approximate. Compare speed vs accuracy", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Build hybrid search: Combine vector similarity (semantic) with BM25 (keyword). Use reciprocal rank fusion", xp: 75, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Optimize for scale: Index 100K documents, achieve <100ms query time. Use HNSW or IVF_PQ algorithms", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Chunking Strategies",
              subTopics: ["Fixed-size chunks", "Semantic chunking", "Recursive splitting", "Overlap"],
              exercises: [
                { difficulty: "easy", task: "Implement fixed-size chunking: Split text into 500-char chunks with 50-char overlap. Handle sentence boundaries", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Semantic chunking: Use sentence embeddings, cluster similar sentences, create coherent chunks", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Recursive text splitter: Split by paragraphs, then sentences, then words. Respect max chunk size", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Evaluate chunking: Test 3 strategies on Q&A accuracy. Measure: retrieval precision, answer quality, context efficiency", xp: 75, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "RAG Pipeline",
              subTopics: ["Query → Embed → Retrieve → Augment → Generate", "Context window", "Prompt construction"],
              exercises: [
                { difficulty: "medium", task: "Build basic RAG: User query → embed → retrieve top 3 docs → inject into prompt → generate answer", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Add query rewriting: Expand user query to 3 variations, retrieve for each, deduplicate results", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Implement re-ranking: Retrieve 20 docs, use cross-encoder to re-rank, keep top 5 for LLM context", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Multi-hop RAG: Answer requires multiple retrieval steps. Chain reasoning: Retrieve → Generate sub-question → Retrieve again", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Evaluation & Quality",
              subTopics: ["Retrieval metrics", "Answer quality", "Hallucination detection", "Ground truth comparison"],
              exercises: [
                { difficulty: "medium", task: "Calculate retrieval metrics: Precision@k, Recall@k, MRR, nDCG on test set of 100 queries", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Build hallucination detector: Check if answer claims are in retrieved context. Use NLI model", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Answer quality scoring: Compare generated answer with ground truth. Use ROUGE, BLEU, BERTScore", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Full RAG evaluation suite: Retrieval quality, answer accuracy, latency, cost. Create comprehensive dashboard", xp: 90, estimatedHours: 4 }
              ]
            }
          ],
          weekendProject: {
            name: "Document Q&A System from Scratch",
            duration: "12 hours",
            description: "Build complete RAG system without LangChain - understand every component",
            requirements: [
              "Data ingestion: Load PDFs/docs, extract text, clean, chunk (use PyPDF2 or similar)",
              "Embedding: Generate embeddings for all chunks using OpenAI ada-002",
              "Vector store: Use ChromaDB or FAISS for storage and retrieval",
              "Query processing: Accept natural language question, embed query",
              "Retrieval: Find top-k most relevant chunks (k=5), experiment with similarity threshold",
              "Context construction: Build prompt with retrieved chunks + question",
              "Generation: Call OpenAI to generate answer based on context",
              "Source attribution: Return which documents were used (citations)",
              "Evaluation: Create 20 test questions with ground truth, measure accuracy",
              "UI: Streamlit interface for asking questions, showing sources",
              "No frameworks: Pure Python + OpenAI + ChromaDB (no LangChain)"
            ],
            techStack: "Python, OpenAI API, ChromaDB, PyPDF2, Streamlit",
            evaluation: "Answers 15/20 test questions correctly, shows source citations, <3 second latency",
            portfolioValue: "Shows: Deep RAG understanding, no black-box frameworks, system design thinking",
            stanfordLectures: [
              "Lecture 1: Introduction and Word Vectors",
              "Lecture 2: Word Vectors and Word Senses",
              "Lecture 14: Question Answering and Information Retrieval"
            ],
            testDatasets: [
              "Use your TCS project documentation (if available)",
              "Or Stanford SQuAD dataset",
              "Or create custom dataset from Wikipedia articles"
            ]
          }
        },
        {
          weekNum: 14,
          title: "Production RAG with LangChain",
          goal: "Enterprise-ready RAG system",
          hoursThisWeek: 40,
          summary: "LangChain components, retrieval optimization, re-ranking, evaluation. Weekend: **YOUR TCS BANKING DOCS** RAG system.",
          resources: [
            { name: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", type: "docs" },
            { name: "Pinecone Vector Database", url: "https://docs.pinecone.io/guides/get-started/overview", type: "docs" },
            { name: "Advanced RAG Techniques", url: "https://www.youtube.com/watch?v=T-D1OfcDW1M", type: "video" },
            { name: "LlamaIndex for RAG", url: "https://docs.llamaindex.ai/en/stable/", type: "docs" }
          ],
          handsOn: [
            {
              rootTopic: "LangChain RAG Components",
              subTopics: ["Document loaders", "Text splitters", "Retrievers", "Chains"],
              exercises: [
                { difficulty: "medium", task: "Use LangChain document loaders: PDFLoader, CSVLoader, WebLoader. Load 10 different file types", xp: 50, estimatedHours: 2 },
                { difficulty: "medium", task: "Compare text splitters: CharacterTextSplitter, RecursiveCharacterTextSplitter, TokenTextSplitter. Test on 100-page doc", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Build LangChain retriever: VectorStoreRetriever with Pinecone. Add MMR (max marginal relevance) for diversity", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Create custom chain: RetrievalQA with custom prompt template, source filtering, and answer verification", xp: 75, estimatedHours: 3.5 }
              ]
            },
            {
              rootTopic: "Advanced Retrieval",
              subTopics: ["Re-ranking", "Hybrid search", "Parent-child chunks", "Multi-query"],
              exercises: [
                { difficulty: "hard", task: "Implement cross-encoder re-ranking: Retrieve 20 docs, re-rank with BERT cross-encoder, keep top 5", xp: 80, estimatedHours: 3.5 },
                { difficulty: "hard", task: "Build hybrid search: Combine dense (embeddings) + sparse (BM25). Use reciprocal rank fusion for merging", xp: 85, estimatedHours: 4 },
                { difficulty: "expert", task: "Parent-child chunking: Store small chunks for retrieval, large chunks for context. Test on legal docs", xp: 90, estimatedHours: 4.5 },
                { difficulty: "expert", task: "Multi-query retrieval: Generate 3 query variations, retrieve for each, deduplicate, re-rank combined results", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Production Vector Databases",
              subTopics: ["Pinecone", "Weaviate", "Qdrant", "Migration strategies"],
              exercises: [
                { difficulty: "medium", task: "Set up Pinecone: Create index, upsert 10K vectors with metadata, query with filters", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Compare vector DBs: Benchmark Pinecone vs Weaviate vs Qdrant on speed, accuracy, cost for 100K docs", xp: 75, estimatedHours: 3.5 },
                { difficulty: "hard", task: "Implement incremental updates: Add/update/delete documents without rebuilding entire index", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Multi-tenant vector store: Isolate data per user, implement namespace strategy, test security", xp: 85, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "RAG Evaluation",
              subTopics: ["RAGAS framework", "Context relevance", "Answer faithfulness", "Groundedness"],
              exercises: [
                { difficulty: "medium", task: "Install RAGAS, evaluate RAG on 50 Q&A pairs. Measure: context_precision, answer_relevancy, faithfulness", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Build custom evaluator: Check if answer is grounded in context using NLI model (entailment score)", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "A/B test chunking strategies: Compare 5 approaches on retrieval quality using RAGAS metrics", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Full evaluation pipeline: Synthetic test generation (LLM creates Q&A), auto-eval, regression detection", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Cost & Performance Optimization",
              subTopics: ["Caching", "Token reduction", "Lazy loading", "Batch processing"],
              exercises: [
                { difficulty: "medium", task: "Implement semantic caching: Cache similar queries (>0.95 similarity), measure hit rate, cost savings", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Token optimization: Compress retrieved context with extractive summarization before LLM. Measure quality vs savings", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Batch embedding generation: Process 10K docs in batches of 100, implement retry logic, progress tracking", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Smart routing: Use small LLM for simple queries, large for complex. Auto-classify query complexity", xp: 90, estimatedHours: 4.5 }
              ]
            }
          ],
          weekendProject: {
            name: "TCS Banking Documents RAG System",
            duration: "14 hours",
            description: "Production-ready RAG for your TCS banking project docs - showcase in interviews!",
            requirements: [
              "Ingest TCS project docs: Requirements, design docs, code docs, API specs, test plans",
              "LangChain pipeline: Document loaders, chunking (recursive 1000 chars, 200 overlap), Pinecone storage",
              "Advanced retrieval: Hybrid search (semantic + keyword), cross-encoder re-ranking",
              "Query types: 'Explain authentication flow', 'Show transaction API', 'List security measures'",
              "Answer with citations: Return source document names, page numbers, confidence scores",
              "Evaluation: 30 test questions, achieve >85% accuracy, <2s latency",
              "API: FastAPI endpoint POST /query with authentication",
              "Caching: Redis for semantic caching, 70% cache hit rate target",
              "Monitoring: Log queries, latency, costs, retrieval quality",
              "UI: Streamlit interface showing: query, answer, sources, confidence, cost"
            ],
            techStack: "LangChain, Pinecone, FastAPI, Redis, Streamlit",
            evaluation: "Answers 25/30 test questions correctly, <$0.05 per query, 70% cache hit rate",
            portfolioValue: "HUGE: Shows production RAG on real enterprise docs. 'I built this for my TCS project'",
            interviewTalking: "Walk through: Architecture diagram, chunking strategy, why hybrid search, cost optimization"
          }
        },
        {
          weekNum: 15,
          title: "AI Agents & LangGraph",
          goal: "Build autonomous agents (like your TCS projects)",
          hoursThisWeek: 40,
          summary: "ReAct pattern, LangGraph state machines, tools, memory. Weekend: Multi-step research agent.",
          resources: [
            { name: "LangGraph Documentation", url: "https://langchain-ai.github.io/langgraph/", type: "docs" },
            { name: "ReAct Paper (Yao et al.)", url: "https://arxiv.org/abs/2210.03629", type: "paper" },
            { name: "Building AI Agents", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", type: "course" },
            { name: "AutoGPT Repository", url: "https://github.com/Significant-Gravitas/AutoGPT", type: "github" }
          ],
          handsOn: [
            {
              rootTopic: "ReAct Pattern",
              subTopics: ["Reasoning", "Action", "Observation", "Iteration"],
              exercises: [
                { difficulty: "medium", task: "Implement basic ReAct loop: Thought → Action (choose tool) → Observation → repeat. Test on math problems", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Build ReAct agent with 5 tools: Wikipedia search, calculator, web scrape, code execution, weather API", xp: 80, estimatedHours: 3.5 },
                { difficulty: "hard", task: "Add max iterations limit (10), handle infinite loops, implement 'give up' logic if no progress", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Self-reflection: Agent critiques its own reasoning, corrects mistakes. 'Did I solve it correctly?'", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "LangGraph State Machines",
              subTopics: ["Nodes", "Edges", "State", "Conditional routing"],
              exercises: [
                { difficulty: "medium", task: "Build simple graph: Start → Query → Search → Summarize → End. Use StateGraph class", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Add conditional edges: Route to different nodes based on query type (factual → search, math → calculator)", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Implement cycles: Research loop that retrieves → analyzes → decides if more info needed → retrieves again", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Multi-agent collaboration: Researcher agent → Writer agent → Editor agent. Pass state between agents", xp: 100, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Agent Tools",
              subTopics: ["Tool definition", "Error handling", "Tool selection", "Custom tools"],
              exercises: [
                { difficulty: "easy", task: "Create 3 custom tools: File reader, SQL executor, API caller. Use @tool decorator from LangChain", xp: 45, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Tool with complex inputs: SQL tool takes {query: str, database: str, timeout: int}. Validate all inputs", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Implement tool error handling: Retry on network errors, skip on auth errors, fallback tool on failures", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Dynamic tool loading: Agent learns new tools at runtime. 'I need a YouTube search tool' → creates it", xp: 90, estimatedHours: 4.5 }
              ]
            },
            {
              rootTopic: "Agent Memory",
              subTopics: ["Conversation history", "Entity memory", "Summary memory", "Vector memory"],
              exercises: [
                { difficulty: "medium", task: "Implement conversation buffer: Store last 10 messages, inject into context. Test with multi-turn dialogue", xp: 50, estimatedHours: 2 },
                { difficulty: "hard", task: "Entity memory: Extract and track entities (people, dates, facts) across conversation. Use NER model", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Summary memory: Summarize old messages when context limit reached. Keep last 5 + summary of rest", xp: 70, estimatedHours: 3 },
                { difficulty: "expert", task: "Vector memory: Store all interactions as embeddings, retrieve relevant past conversations for context", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Planning & Execution",
              subTopics: ["Task decomposition", "Plan generation", "Execution tracking", "Re-planning"],
              exercises: [
                { difficulty: "hard", task: "Task decomposer: Break 'Plan a trip to Paris' into subtasks: flights, hotels, itinerary, budget", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Plan-and-execute agent: Generate plan (steps 1-5) → execute step 1 → update plan → execute step 2 → ...", xp: 95, estimatedHours: 5 },
                { difficulty: "expert", task: "Re-planning: If step fails or new info discovered, regenerate remaining plan. Handle plan conflicts", xp: 90, estimatedHours: 4.5 },
                { difficulty: "expert", task: "Parallel execution: Execute independent steps simultaneously (API calls), merge results, continue", xp: 100, estimatedHours: 5 }
              ]
            }
          ],
          weekendProject: {
            name: "Autonomous Research Agent",
            duration: "12 hours",
            description: "Agent that researches complex questions using multiple tools, writes comprehensive reports",
            requirements: [
              "Input: Complex question like 'Compare Gen AI adoption in banking vs healthcare 2024'",
              "Planning: Agent creates research plan (5-7 steps): Define search queries, identify sources, verify facts",
              "Tools: Wikipedia search, Tavily API (web search), Arxiv papers, Python REPL for data analysis",
              "ReAct loop: Thought → Action → Observation → adjust approach based on findings",
              "Information synthesis: Combine data from multiple sources, resolve conflicts, identify gaps",
              "Report generation: 1000-word report with sections: Summary, Findings, Data, Conclusions, Sources",
              "Self-evaluation: Agent scores its own report quality, identifies weaknesses",
              "LangGraph state machine: Planning → Research → Analysis → Writing → Review → Final",
              "Memory: Track researched topics to avoid redundant searches",
              "Error handling: Retry failed searches, skip unavailable sources, timeout after 10 minutes"
            ],
            techStack: "LangGraph, LangChain, Tavily API, OpenAI, Python",
            evaluation: "Produces accurate 1000-word report, cites 5+ sources, completes in <5 minutes",
            portfolioValue: "Shows autonomous AI, complex reasoning, tool use - exactly what TCS/Accenture need",
            interviewTalking: "Explain: ReAct pattern, why LangGraph over simple loops, how you handle agent failures"
          }
        },
        {
          weekNum: 16,
          title: "Production Deployment",
          goal: "Deploy complete Gen AI system",
          hoursThisWeek: 42,
          summary: "FastAPI, Docker, GCP Cloud Run, CI/CD, monitoring (LangSmith). Weekend: **DEPLOY EVERYTHING** - live URL to show in interviews.",
          resources: [
            { name: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/", type: "docs" },
            { name: "Docker for ML", url: "https://docs.docker.com/get-started/", type: "docs" },
            { name: "Google Cloud Run", url: "https://cloud.google.com/run/docs/quickstarts", type: "docs" },
            { name: "LangSmith Monitoring", url: "https://docs.smith.langchain.com/", type: "docs" }
          ],
          handsOn: [
            {
              rootTopic: "FastAPI for Gen AI",
              subTopics: ["API design", "Streaming responses", "Authentication", "Rate limiting"],
              exercises: [
                { difficulty: "medium", task: "Build FastAPI app: POST /chat, POST /embed, GET /health. Include Swagger docs, request validation", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Implement streaming: Use FastAPI StreamingResponse for token-by-token LLM output. Test with async client", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Add JWT authentication: Protect endpoints, validate tokens, implement refresh tokens, rate limit per user", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "API rate limiting: Token bucket algorithm, per-user quotas, cost tracking, auto-throttle expensive users", xp: 85, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Dockerization",
              subTopics: ["Multi-stage builds", "Image optimization", "Environment variables", "Health checks"],
              exercises: [
                { difficulty: "medium", task: "Write Dockerfile: Python 3.11, install deps, copy code, expose port 8000. Build and run locally", xp: 50, estimatedHours: 2 },
                { difficulty: "hard", task: "Multi-stage build: Builder stage (compile deps) → runtime stage (slim image). Reduce from 2GB → 500MB", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Add health check: HEALTHCHECK endpoint responds <1s, Docker restarts if 3 failures. Test container recovery", xp: 65, estimatedHours: 2.5 },
                { difficulty: "expert", task: "Production Dockerfile: Non-root user, security scanning (Snyk), secrets management, logging config", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Cloud Deployment (GCP)",
              subTopics: ["Cloud Run", "Secret Manager", "Cloud Build", "Load balancing"],
              exercises: [
                { difficulty: "medium", task: "Deploy to Cloud Run: Push image to Artifact Registry, deploy service, configure autoscaling (0-10 instances)", xp: 60, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Secrets management: Store OpenAI key in Secret Manager, inject at runtime. Never commit secrets to code", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Custom domain + HTTPS: Map custom domain to Cloud Run, enable HTTPS, configure CORS for frontend", xp: 65, estimatedHours: 2.5 },
                { difficulty: "expert", task: "Multi-region deployment: Deploy to 3 regions (US, EU, Asia), use load balancer for geo-routing", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "CI/CD Pipeline",
              subTopics: ["GitHub Actions", "Automated testing", "Deployment automation", "Rollback strategy"],
              exercises: [
                { difficulty: "medium", task: "Set up GitHub Actions: On push to main → run tests → build Docker → deploy to Cloud Run", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Add testing stage: Run pytest, check coverage >80%, fail pipeline if tests fail. No deploy on red tests", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Blue-green deployment: Deploy new version to separate service, run smoke tests, switch traffic if pass", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Canary deployment: Route 10% traffic to new version, monitor error rate, auto-rollback if >1% errors", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Monitoring & Observability",
              subTopics: ["LangSmith", "Logging", "Metrics", "Alerting"],
              exercises: [
                { difficulty: "medium", task: "Set up LangSmith: Track all LLM calls, trace chains, view latency/cost per request. Integrate with LangChain", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Structured logging: JSON logs with trace IDs, user IDs, latency, costs. Ship to Cloud Logging", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Metrics dashboard: Track requests/sec, p95 latency, error rate, cost/request. Use Cloud Monitoring", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Alerting: PagerDuty alerts for: error rate >5%, latency >5s, cost >$10/hour, API key leaked", xp: 85, estimatedHours: 4 }
              ]
            }
          ],
          weekendProject: {
            name: "Deploy Full-Stack Gen AI Application",
            duration: "16 hours",
            description: "Deploy RAG system + Agent to production with monitoring - LIVE URL FOR RESUME",
            requirements: [
              "Backend API: FastAPI with 10 endpoints (chat, RAG, agent, embeddings, health, metrics)",
              "Docker: Multi-stage build, <600MB image, health checks, non-root user",
              "Cloud Run: Deploy to GCP, autoscaling 0-5 instances, custom domain (genai-portfolio.com)",
              "Frontend: React/Streamlit UI deployed to Vercel/Netlify, calls your backend API",
              "Authentication: JWT tokens, API keys for programmatic access",
              "Rate limiting: 100 requests/hour free tier, 1000/hour for paid",
              "Monitoring: LangSmith for LLM tracing, Cloud Monitoring for metrics",
              "Logging: Structured JSON logs, searchable in Cloud Logging",
              "CI/CD: GitHub Actions - push to main auto-deploys after tests pass",
              "Documentation: README with API docs, curl examples, architecture diagram",
              "Cost controls: Budget alerts at $20, $50, $100/month. Auto-shutdown if exceeded",
              "Security: Snyk scan in CI, secrets in Secret Manager, HTTPS only"
            ],
            techStack: "FastAPI, Docker, GCP Cloud Run, GitHub Actions, LangSmith, React/Streamlit",
            evaluation: "Live URL works, <2s latency, costs <$5/month, uptime >99%",
            portfolioValue: "CRITICAL: You have a deployed Gen AI app. URL on resume. 'Try it yourself at...'",
            interviewTalking: "Show live demo in interview. Explain: Architecture, scaling strategy, cost optimization, security",
            resumeSection: "• Deployed production Gen AI API to GCP Cloud Run with 99.9% uptime, serving 1000+ requests/day\n• Implemented CI/CD pipeline with automated testing, reducing deployment time from 2 hours to 5 minutes\n• Optimized costs to $4/month through caching and smart model routing, handling 30K requests/month"
          }
        }
      ]
    },
    {
      id: 4,
      title: "Portfolio & Interview Mastery",
      weeks: 4,
      hoursPerWeek: 30,
      color: "from-orange-500 to-red-500",
      icon: Trophy,
      description: "Polish portfolio, master interviews, land 12-15k QAR offers",
      skillProgress: "Hidden skills → Visible expertise | Interview confidence: 10/10",
      projects: [
        { name: "Portfolio Website", week: 17, tech: "React, Tailwind" },
        { name: "System Design Case Studies", week: 18, tech: "Architecture diagrams" },
        { name: "4 Showcase Projects", week: 19, tech: "Best work, documented" },
        { name: "LinkedIn + GitHub Optimization", week: 20, tech: "Personal branding" }
      ],
      weeks_detail: [
        {
          weekNum: 17,
          title: "Build Portfolio Website",
          goal: "Showcase your work professionally",
          hoursThisWeek: 30,
          summary: "React site with all projects, deployed. Clean design, fast loading, mobile responsive.",
          resources: [
            { name: "React Official Tutorial", url: "https://react.dev/learn", type: "docs" },
            { name: "Tailwind CSS", url: "https://tailwindcss.com/docs/installation", type: "docs" },
            { name: "Vercel Deployment", url: "https://vercel.com/docs", type: "docs" },
            { name: "Portfolio Examples", url: "https://github.com/topics/portfolio-website", type: "github" }
          ],
          handsOn: [
            {
              rootTopic: "Portfolio Design",
              subTopics: ["Layout", "Color scheme", "Typography", "Responsive design"],
              exercises: [
                { difficulty: "easy", task: "Design wireframe: Hero section, Projects grid, About, Contact. Use Figma or paper sketches", xp: 30, estimatedHours: 1 },
                { difficulty: "medium", task: "Choose tech-professional color scheme: Primary, secondary, accent. Test contrast ratios (WCAG AA)", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Implement responsive layout: Mobile-first, breakpoints at 640px, 768px, 1024px. Test on 5 devices", xp: 50, estimatedHours: 2 },
                { difficulty: "hard", task: "Add animations: Fade-in on scroll, smooth transitions, loading states. Use Framer Motion or CSS", xp: 60, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Project Showcase",
              subTopics: ["Project cards", "Demo videos", "GitHub links", "Tech stack badges"],
              exercises: [
                { difficulty: "medium", task: "Create project cards: Title, description, tech stack, live demo, GitHub. Hover effects", xp: 45, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Record demo videos: 30-60 seconds per project. Show key features, narrate. Use OBS Studio", xp: 70, estimatedHours: 3 },
                { difficulty: "medium", task: "Add tech stack badges: React, Python, Docker, etc. Use shields.io or custom SVGs", xp: 40, estimatedHours: 1 },
                { difficulty: "hard", task: "Project detail pages: Architecture diagram, challenges faced, solutions, metrics, learnings", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "About & Contact",
              subTopics: ["Bio", "Skills", "Timeline", "Contact form"],
              exercises: [
                { difficulty: "easy", task: "Write 200-word bio: TCS background, Gen AI transformation, goals. Professional but human tone", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Skills visualization: Progress bars or radar chart for Python, ML, Gen AI, Docker, etc.", xp: 50, estimatedHours: 2 },
                { difficulty: "medium", task: "Build contact form: Name, email, message. Validate inputs, send via EmailJS or Formspree", xp: 55, estimatedHours: 2 },
                { difficulty: "hard", task: "Timeline component: 20-week journey visualization. Weeks → Projects → Skills gained", xp: 65, estimatedHours: 2.5 }
              ]
            },
            {
              rootTopic: "Performance & SEO",
              subTopics: ["Image optimization", "Lazy loading", "Meta tags", "Lighthouse score"],
              exercises: [
                { difficulty: "medium", task: "Optimize images: Convert to WebP, compress, lazy load. Target <200KB per page", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "SEO optimization: Meta tags, Open Graph, structured data (JSON-LD), sitemap.xml, robots.txt", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Achieve Lighthouse 90+: Performance, Accessibility, Best Practices, SEO all green", xp: 75, estimatedHours: 3 },
                { difficulty: "medium", task: "Analytics: Add Google Analytics or Plausible. Track: page views, project clicks, contact form", xp: 45, estimatedHours: 1.5 }
              ]
            },
            {
              rootTopic: "Deployment & Domain",
              subTopics: ["Vercel/Netlify", "Custom domain", "HTTPS", "CI/CD"],
              exercises: [
                { difficulty: "medium", task: "Deploy to Vercel: Connect GitHub, auto-deploy on push to main, preview deployments for PRs", xp: 50, estimatedHours: 1.5 },
                { difficulty: "medium", task: "Buy custom domain: yourname.dev or .ai (Namecheap $12/year), configure DNS, enable HTTPS", xp: 55, estimatedHours: 2 },
                { difficulty: "easy", task: "Set up redirects: www → non-www, http → https, /github → your GitHub profile", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Test cross-browser: Chrome, Firefox, Safari, Edge. Fix any rendering issues", xp: 45, estimatedHours: 1.5 }
              ]
            }
          ],
          weekendProject: {
            name: "Complete Portfolio Website",
            duration: "10 hours",
            description: "Build and deploy professional portfolio - YOUR PERSONAL BRAND",
            requirements: [
              "Hero section: Name, title 'Gen AI Engineer', tagline, CTA buttons (Projects, Contact)",
              "Projects section: 12 portfolio projects with cards, filters by tech (Python, Gen AI, ML)",
              "About section: Bio, skills radar chart, 20-week journey timeline, certifications",
              "Contact: Working form, social links (LinkedIn, GitHub, Email)",
              "Mobile responsive: Perfect on iPhone, Android, tablet",
              "Fast: Lighthouse score >90, <3s page load",
              "SEO: Ranks for '[Your Name] Gen AI Engineer' on Google",
              "Custom domain: yourname.dev with HTTPS",
              "Analytics: Track visitors, most viewed projects",
              "Resume download: PDF button in hero section"
            ],
            techStack: "React, Tailwind CSS, Framer Motion, Vercel",
            evaluation: "Looks professional, loads fast, mobile perfect, ranks on Google within 2 weeks",
            portfolioValue: "Your personal brand. First thing recruiters see. 'I built my portfolio from scratch'",
            criticalSections: [
              "Projects must have: Live demo links, GitHub repos, tech stacks, metrics (99% uptime, <2s latency)",
              "Avoid: Stock photos, Lorem ipsum, broken links, slow loading, bad mobile experience"
            ]
          }
        },
        {
          weekNum: 18,
          title: "System Design Mastery",
          goal: "Design Gen AI systems at scale",
          hoursThisWeek: 32,
          summary: "LLMOps, cost optimization, safety, monitoring. Create 5 system design case studies.",
          resources: [
            { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "github" },
            { name: "Designing Data-Intensive Apps", url: "https://dataintensive.net/", type: "book" },
            { name: "ML System Design Interview", url: "https://www.educative.io/courses/machine-learning-system-design", type: "course" },
            { name: "OpenAI Production Best Practices", url: "https://platform.openai.com/docs/guides/production-best-practices", type: "docs" }
          ],
          handsOn: [
            {
              rootTopic: "System Design Fundamentals",
              subTopics: ["Requirements gathering", "Capacity estimation", "Architecture diagrams", "Tradeoffs"],
              exercises: [
                { difficulty: "medium", task: "Design chatbot for 1M users: Estimate: requests/sec, compute, storage, cost. Document assumptions", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "Draw architecture: Load balancer, API gateway, services, databases, caches. Use draw.io or Excalidraw", xp: 70, estimatedHours: 2.5 },
                { difficulty: "hard", task: "Analyze tradeoffs: SQL vs NoSQL, sync vs async, monolith vs microservices for Gen AI app", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Full design doc: Requirements, non-functional reqs, architecture, API design, data model, deployment", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "LLMOps & MLOps",
              subTopics: ["Model versioning", "A/B testing", "Monitoring", "Fallbacks"],
              exercises: [
                { difficulty: "medium", task: "Design prompt versioning: Store prompts in DB, version control, A/B test, track performance", xp: 65, estimatedHours: 2.5 },
                { difficulty: "hard", task: "A/B testing framework: Route 10% to GPT-4, 90% to GPT-3.5. Compare: quality, latency, cost", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Build LLM fallback chain: GPT-4 → Claude → GPT-3.5 → rule-based. Switch on errors", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Full LLMOps pipeline: Prompt registry, versioning, deployment, rollback, monitoring, alerts", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Cost Optimization",
              subTopics: ["Token reduction", "Caching strategies", "Model selection", "Rate limiting"],
              exercises: [
                { difficulty: "medium", task: "Calculate costs: 1M requests/month, avg 2K tokens. Compare GPT-4 ($60K) vs GPT-3.5 ($4K)", xp: 50, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Design caching strategy: Semantic cache (embeddings), exact match cache, TTL. Estimate savings", xp: 75, estimatedHours: 3 },
                { difficulty: "hard", task: "Smart routing: Classify queries as simple/complex, route to appropriate model. Target 50% cost reduction", xp: 80, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Full cost optimization: Caching, prompt compression, batching, cheaper models, monitoring. <$0.01/request", xp: 90, estimatedHours: 4 }
              ]
            },
            {
              rootTopic: "Safety & Moderation",
              subTopics: ["Content filtering", "PII detection", "Jailbreak prevention", "Output validation"],
              exercises: [
                { difficulty: "medium", task: "Implement content moderation: OpenAI Moderation API, block harmful queries, log violations", xp: 60, estimatedHours: 2 },
                { difficulty: "hard", task: "PII detection: Regex + NER model to detect emails, SSN, credit cards. Mask before logging", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Jailbreak prevention: Detect prompt injection attempts ('Ignore previous instructions'), block & alert", xp: 75, estimatedHours: 3 },
                { difficulty: "expert", task: "Full safety pipeline: Input moderation, PII detection, jailbreak prevention, output validation, audit logs", xp: 95, estimatedHours: 5 }
              ]
            },
            {
              rootTopic: "Case Study Creation",
              subTopics: ["Problem statement", "Architecture", "Scaling", "Metrics"],
              exercises: [
                { difficulty: "hard", task: "Case Study 1: Design RAG for 10M documents. Cover: chunking, indexing, query routing, costs", xp: 80, estimatedHours: 3 },
                { difficulty: "hard", task: "Case Study 2: Build chatbot for 100K concurrent users. Cover: scaling, rate limiting, latency", xp: 80, estimatedHours: 3 },
                { difficulty: "hard", task: "Case Study 3: Design code generation platform. Cover: context management, sandboxing, security", xp: 85, estimatedHours: 3.5 },
                { difficulty: "hard", task: "Case Study 4: Multi-tenant Gen AI SaaS. Cover: isolation, billing, model selection per tier", xp: 85, estimatedHours: 3.5 },
                { difficulty: "expert", task: "Case Study 5: Design TCS banking AI assistant. Cover: security, compliance, integration, monitoring", xp: 95, estimatedHours: 4 }
              ]
            }
          ],
          weekendProject: {
            name: "5 System Design Case Studies",
            duration: "12 hours",
            description: "Create portfolio of system designs - show architecture thinking",
            requirements: [
              "Format per case study: Problem → Requirements → Architecture diagram → API design → Data model → Scaling strategy → Monitoring → Costs",
              "Case Study 1: Document Q&A for 10M docs (like your TCS project)",
              "Case Study 2: Real-time customer support chatbot (100K concurrent)",
              "Case Study 3: Code generation IDE plugin (like Copilot)",
              "Case Study 4: Multi-tenant Gen AI SaaS (3 pricing tiers)",
              "Case Study 5: Banking AI assistant (your TCS domain)",
              "Each must cover: Functional reqs, non-functional reqs, capacity estimation, architecture, tradeoffs",
              "Diagrams: Use draw.io, Excalidraw, or Lucidchart",
              "Write in Markdown, publish to GitHub, link from portfolio",
              "Interview-ready: Practice explaining each in 15 minutes"
            ],
            techStack: "Draw.io, Markdown, GitHub",
            evaluation: "5 complete case studies, clear diagrams, realistic numbers, explain tradeoffs",
            portfolioValue: "HUGE: Shows senior-level thinking. 'Let me show you 5 systems I designed'",
            interviewUse: "When asked 'Design a chatbot', pull up Case Study 2 and walk through it"
          }
        },
        {
          weekNum: 19,
          title: "Mock Interviews (Every Day)",
          goal: "Answer every question confidently",
          hoursThisWeek: 35,
          summary: "4 mock interviews/day (technical, system design, behavioral). Record, review, improve.",
          resources: [
            { name: "Pramp - Free Mock Interviews", url: "https://www.pramp.com/", type: "platform" },
            { name: "Interviewing.io", url: "https://interviewing.io/", type: "platform" },
            { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/", type: "guide" },
            { name: "LeetCode ML/AI Problems", url: "https://leetcode.com/problemset/all/?topicSlugs=machine-learning", type: "practice" }
          ],
          handsOn: [
            {
              rootTopic: "Technical Questions Prep",
              subTopics: ["LLM fundamentals", "RAG internals", "Transformers", "Production issues"],
              exercises: [
                { difficulty: "medium", task: "Answer 50 questions: Create flashcards, practice daily. Cover: attention, embeddings, RAG, agents", xp: 60, estimatedHours: 3 },
                { difficulty: "hard", task: "Record yourself: Answer 20 questions on video. Watch, critique: filler words, clarity, confidence", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Deep dive 10 questions: Write 500-word answers with examples, diagrams, code. Memorize key points", xp: 75, estimatedHours: 4 },
                { difficulty: "expert", task: "Mock technical interview: Friend/mentor asks 10 random questions. No notes. Target 8/10 correct", xp: 85, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "System Design Practice",
              subTopics: ["Whiteboard design", "Time management", "Communication", "Tradeoff discussion"],
              exercises: [
                { difficulty: "hard", task: "Timed design (45 min): 'Design Netflix recommendation system'. Cover all aspects, no breaks", xp: 75, estimatedHours: 2 },
                { difficulty: "hard", task: "Practice 5 Gen AI designs: Chatbot, RAG, code assistant, content moderation, search engine", xp: 80, estimatedHours: 4 },
                { difficulty: "expert", task: "Mock system design interview: Use Pramp or friend. Get feedback on: clarity, depth, tradeoffs", xp: 90, estimatedHours: 2 },
                { difficulty: "expert", task: "Design on whiteboard: Practice drawing without undo. Clean diagrams, clear labels, good layout", xp: 70, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Behavioral Questions",
              subTopics: ["STAR method", "Conflict resolution", "Leadership", "Failure stories"],
              exercises: [
                { difficulty: "medium", task: "Prepare 10 STAR stories: TCS projects, 20-week journey, challenges overcome, team collaboration", xp: 55, estimatedHours: 2.5 },
                { difficulty: "medium", task: "Answer common questions: 'Why Gen AI?', 'Biggest challenge?', 'Tell me about yourself' (2-min version)", xp: 50, estimatedHours: 2 },
                { difficulty: "hard", task: "Record behavioral practice: Answer 20 questions on video. Refine: storytelling, conciseness, enthusiasm", xp: 65, estimatedHours: 3 },
                { difficulty: "hard", task: "Mock behavioral round: Friend asks 10 questions. No preparation. Target: confident, natural answers", xp: 70, estimatedHours: 1.5 }
              ]
            },
            {
              rootTopic: "Coding Challenges",
              subTopics: ["Algorithms", "Data structures", "ML coding", "Live coding"],
              exercises: [
                { difficulty: "medium", task: "Solve 20 LeetCode easy: Arrays, strings, hashmaps. Practice explaining solution while coding", xp: 55, estimatedHours: 4 },
                { difficulty: "hard", task: "Solve 30 medium problems: Trees, graphs, DP. Focus on ML-adjacent: matrix ops, sliding window", xp: 75, estimatedHours: 6 },
                { difficulty: "hard", task: "ML coding: Implement K-means, decision tree, linear regression from scratch in 45 minutes each", xp: 80, estimatedHours: 4 },
                { difficulty: "expert", task: "Mock coding interview: Pramp or interviewing.io. Live code, explain thinking, handle hints", xp: 85, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Project Deep Dive Prep",
              subTopics: ["Portfolio projects", "Metrics", "Challenges", "Technical details"],
              exercises: [
                { difficulty: "medium", task: "Memorize 12 projects: For each, know: goal, tech stack, architecture, challenges, results", xp: 60, estimatedHours: 3 },
                { difficulty: "hard", task: "Practice 'Tell me about a project': 5-minute version and 15-minute deep dive for each project", xp: 70, estimatedHours: 3 },
                { difficulty: "hard", task: "Anticipate questions: For each project, list 10 likely questions (Why this tech? How did you scale?)", xp: 65, estimatedHours: 2.5 },
                { difficulty: "expert", task: "Mock project grilling: Friend picks a project, asks tough questions for 30 minutes. No looking at notes", xp: 85, estimatedHours: 1.5 }
              ]
            }
          ],
          weekendProject: {
            name: "Full Mock Interview Marathon",
            duration: "8 hours",
            description: "Simulate complete interview loop - get battle-ready",
            requirements: [
              "Schedule 4 mock interviews: Technical (1h), System Design (1h), Coding (1h), Behavioral (45m)",
              "Use real platforms: Pramp (free), interviewing.io ($50/session), or friends",
              "Treat as real: Dress code, quiet space, no notes, time pressure",
              "Technical round: 15 rapid-fire questions about LLMs, RAG, transformers, production",
              "System design: 'Design Instagram-like Gen AI app for photo captions'",
              "Coding: 2 LeetCode medium problems in 45 minutes",
              "Behavioral: 10 questions using STAR method",
              "Record all sessions, review same day",
              "Get feedback: Ask interviewer to rate 1-10 and provide improvement areas",
              "Create improvement plan: Top 3 weaknesses, how to fix in Week 20"
            ],
            techStack: "Pramp, Zoom, Whiteboard tool (Excalidraw)",
            evaluation: "Complete all 4 rounds, receive feedback, identify top 3 improvement areas",
            portfolioValue: "Confidence boost. You've been through it before. 'I did 20+ mocks'",
            postAnalysis: [
              "Watch recordings: Count filler words (um, like, you know), target <5 per answer",
              "Rate yourself: Technical depth (1-10), communication (1-10), confidence (1-10)",
              "Compare to week start: Measure improvement"
            ]
          }
        },
        {
          weekNum: 20,
          title: "Job Hunt Sprint",
          goal: "Apply to 50+ positions, negotiate offers",
          hoursThisWeek: 30,
          summary: "Optimize LinkedIn, update resume, apply everywhere, network, practice salary negotiation.",
          resources: [
            { name: "LinkedIn Profile Optimization", url: "https://www.linkedin.com/help/linkedin/answer/a522735", type: "guide" },
            { name: "AI/ML Job Boards", url: "https://www.kaggle.com/jobs", type: "platform" },
            { name: "Salary Negotiation Guide", url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/", type: "article" },
            { name: "Networking Tips", url: "https://www.themuse.com/advice/networking-tips", type: "article" }
          ],
          handsOn: [
            {
              rootTopic: "LinkedIn Optimization",
              subTopics: ["Headline", "About section", "Experience", "Skills & endorsements"],
              exercises: [
                { difficulty: "easy", task: "Update headline: 'Gen AI Engineer | LLMs, RAG, Agents | Ex-TCS | Python' (140 chars)", xp: 30, estimatedHours: 0.5 },
                { difficulty: "medium", task: "Rewrite About: Hook (20-week transformation) → Skills → Projects → Call-to-action. 1000 chars", xp: 50, estimatedHours: 2 },
                { difficulty: "medium", task: "Add 12 projects: Each with description, tech stack, link to live demo/GitHub, metrics", xp: 60, estimatedHours: 2.5 },
                { difficulty: "medium", task: "Skills optimization: Add 30+ relevant skills (Gen AI, LLMs, RAG, LangChain, etc). Get 5+ endorsements", xp: 45, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Create 5 posts: Project showcases, learnings, tips. Use hashtags #GenAI #LLM. Target 100+ views each", xp: 65, estimatedHours: 3 }
              ]
            },
            {
              rootTopic: "Resume Perfection",
              subTopics: ["ATS optimization", "Metrics", "Action verbs", "Tailoring"],
              exercises: [
                { difficulty: "medium", task: "Create ATS-friendly resume: Simple format, no tables/images. Use Overleaf LaTeX or Google Docs", xp: 50, estimatedHours: 2 },
                { difficulty: "hard", task: "Add metrics to every bullet: '99.5% uptime', 'reduced costs 50%', 'handled 10K requests/day'", xp: 70, estimatedHours: 2.5 },
                { difficulty: "medium", task: "Use strong verbs: 'Architected', 'Deployed', 'Optimized', 'Built'. Avoid 'Worked on', 'Helped with'", xp: 45, estimatedHours: 1 },
                { difficulty: "hard", task: "Create 3 versions: Gen AI Engineer, ML Engineer, Backend Engineer. Tailor skills/projects per role", xp: 75, estimatedHours: 3 },
                { difficulty: "medium", task: "Test ATS compatibility: Use Jobscan or Resume Worded. Score >80%. Fix keyword gaps", xp: 55, estimatedHours: 1.5 }
              ]
            },
            {
              rootTopic: "Job Applications",
              subTopics: ["Job boards", "Company research", "Cover letters", "Application tracking"],
              exercises: [
                { difficulty: "medium", task: "Apply to 50 jobs: LinkedIn, Indeed, company sites. Target: Gen AI Engineer, ML Engineer, LLM roles", xp: 70, estimatedHours: 8 },
                { difficulty: "medium", task: "Research top 20 companies: Product, tech stack, recent news, employee reviews. Create spreadsheet", xp: 55, estimatedHours: 3 },
                { difficulty: "hard", task: "Write 5 custom cover letters: For dream companies (OpenAI, Anthropic, etc). Personalize per company", xp: 65, estimatedHours: 3 },
                { difficulty: "easy", task: "Track applications: Spreadsheet with: Company, Role, Date, Status, Follow-up. Update daily", xp: 35, estimatedHours: 1 },
                { difficulty: "medium", task: "Set up job alerts: LinkedIn, Indeed, Glassdoor for 'Gen AI', 'LLM', 'RAG' keywords. Check daily", xp: 30, estimatedHours: 0.5 }
              ]
            },
            {
              rootTopic: "Networking & Outreach",
              subTopics: ["LinkedIn connections", "Informational interviews", "Referrals", "Cold emails"],
              exercises: [
                { difficulty: "medium", task: "Connect with 50 Gen AI engineers: Personalized messages, common interest. Target 30% acceptance", xp: 55, estimatedHours: 3 },
                { difficulty: "hard", task: "Request 5 informational interviews: 'I'd love 15 minutes to learn about Gen AI at [Company]'", xp: 65, estimatedHours: 2 },
                { difficulty: "hard", task: "Ask for 3 referrals: From TCS colleagues now at target companies. Share your portfolio first", xp: 70, estimatedHours: 2 },
                { difficulty: "medium", task: "Cold email 10 hiring managers: Brief intro, portfolio link, ask if they're hiring. 2-3 sentences max", xp: 60, estimatedHours: 2 },
                { difficulty: "easy", task: "Engage with content: Comment on 20 Gen AI posts daily. Add value, show expertise. Build visibility", xp: 40, estimatedHours: 2 }
              ]
            },
            {
              rootTopic: "Salary Negotiation",
              subTopics: ["Market research", "Anchoring", "Benefits", "Multiple offers"],
              exercises: [
                { difficulty: "medium", task: "Research salaries: Use Glassdoor, Levels.fyi. Target range for Gen AI Engineer in Qatar: 12-15K QAR", xp: 40, estimatedHours: 1.5 },
                { difficulty: "hard", task: "Practice negotiation: 'Based on my skills and market rates, I'm targeting 14K QAR'. Role-play 5 times", xp: 65, estimatedHours: 2 },
                { difficulty: "medium", task: "Negotiate benefits: List priorities: learning budget, conference budget, remote work, visa support", xp: 50, estimatedHours: 1 },
                { difficulty: "hard", task: "Multi-offer strategy: If 2+ offers, use for leverage. 'Company A offered X, can you match?'", xp: 70, estimatedHours: 1.5 },
                { difficulty: "expert", task: "Practice rejection: 'If you can meet 14K, I'll sign today. Otherwise, I'll go with Company B.' Be ready to walk", xp: 75, estimatedHours: 1 }
              ]
            }
          ],
          weekendProject: {
            name: "Launch Full Job Hunt Campaign",
            duration: "15 hours",
            description: "Apply to 50+ jobs, optimize all profiles, network aggressively",
            requirements: [
              "LinkedIn: Optimized profile, 5 posts published, 50 new connections, Open to Work badge",
              "Resume: 3 versions (Gen AI, ML, Backend), ATS score >80%, PDF and Word formats",
              "Portfolio: Live website with all 12 projects, case studies, resume download",
              "Applications: 50 jobs applied (LinkedIn 30, Indeed 10, company sites 10)",
              "Spreadsheet: Track all applications with status, follow-up dates",
              "Networking: 5 informational interviews requested, 3 referrals asked",
              "Email: Professional signature with portfolio link, LinkedIn, GitHub",
              "Elevator pitch: 60-second intro memorized, practiced 20 times",
              "Target companies: List of 30 companies, prioritize top 10",
              "Follow-up plan: Calendar reminders for 1-week, 2-week follow-ups"
            ],
            techStack: "LinkedIn, Indeed, Google Sheets, Gmail",
            evaluation: "50 applications sent, 5 responses expected, 2 interviews scheduled within 2 weeks",
            portfolioValue: "This is GO TIME. You're in the market. Every day: Apply 5 jobs, send 5 messages",
            mindset: [
              "Rejection is normal: 50 applications → 10 responses → 3 interviews → 1 offer is typical",
              "Numbers game: More applications = more chances. Don't get discouraged",
              "Follow up: 1 week after applying, polite message: 'Checking status of my application'",
              "Confidence: You spent 20 weeks. You're ready. You're a Gen AI engineer."
            ],
            targetTimeline: "Week 20-22: Applications. Week 22-24: Interviews. Week 24-26: Offers & negotiation. Week 26: New job!" 
          }
        }
      ]
    }
  ],

  portfolioProjects: [
    { id: 1, title: "NumPy Data Processor", tech: "Python, NumPy", value: "Performance optimization", week: "Phase 1, Week 1" },
    { id: 2, title: "ML Pipeline Library (OOP)", tech: "Python, OOP, sklearn", value: "Code architecture", week: "Phase 1, Week 2" },
    { id: 3, title: "Kaggle EDA Notebook", tech: "Pandas, Matplotlib", value: "Data analysis", week: "Phase 1, Week 6" },
    { id: 4, title: "ML from Scratch (Regression)", tech: "NumPy", value: "ML fundamentals", week: "Phase 2, Week 7" },
    { id: 5, title: "Neural Network (Pure NumPy)", tech: "NumPy", value: "Deep understanding", week: "Phase 2, Week 9" },
    { id: 6, title: "Image Classifier", tech: "PyTorch, CNNs", value: "Computer vision", week: "Phase 2, Week 10" },
    { id: 7, title: "Mini-GPT Implementation", tech: "PyTorch, Transformers", value: "LLM internals", week: "Phase 3, Week 11" },
    { id: 8, title: "RAG from Scratch", tech: "OpenAI, ChromaDB", value: "RAG fundamentals", week: "Phase 3, Week 13" },
    { id: 9, title: "Production RAG (TCS Docs)", tech: "LangChain, Pinecone, FastAPI", value: "Production system", week: "Phase 3, Week 14" },
    { id: 10, title: "Autonomous Agent", tech: "LangGraph, Tools", value: "Agentic AI", week: "Phase 3, Week 15" },
    { id: 11, title: "Deployed Gen AI API", tech: "Docker, GCP, CI/CD", value: "DevOps", week: "Phase 3, Week 16" },
    { id: 12, title: "Portfolio Website", tech: "React, Tailwind", value: "Personal brand", week: "Phase 4, Week 17" }
  ],

  interviewQuestions: [
    {
      category: "LLM Fundamentals",
      questions: [
        { 
          q: "What are LLM parameters? Explain each.", 
          answer: "Temperature (0-2): randomness. Top_p: nucleus sampling. Max_tokens: output length. In TCS banking chatbot, I use temp=0.2 for accuracy, 0.8 for summaries." 
        },
        { 
          q: "Explain transformer architecture", 
          answer: "Self-attention allows each word to look at all others. Multi-head attention (8-16 heads). Positional encoding for order. Used in GPT (decoder-only) for generation." 
        },
        { 
          q: "What are AI Agents?", 
          answer: "Autonomous systems that reason and take actions. ReAct pattern: Reasoning → Tool selection → Execution → Observation → repeat. Built one in TCS NHTSA project." 
        }
      ]
    },
    {
      category: "RAG & Vector DBs",
      questions: [
        { 
          q: "How does RAG work?", 
          answer: "Query → Embedding → Vector similarity search → Top-k docs → Context + Query → LLM → Response. Better than fine-tuning for frequently changing knowledge." 
        },
        { 
          q: "RAG vs Fine-tuning?", 
          answer: "RAG: Dynamic knowledge, low cost, instant updates. Fine-tuning: Behavior/style change, expensive, slow updates. Used RAG in TCS banking for product FAQs." 
        }
      ]
    },
    {
      category: "Production & System Design",
      questions: [
        { 
          q: "Design chatbot for 100k users/day", 
          answer: "Load balancer → API Gateway → Auth → Rate limiter → Chat service (FastAPI) → RAG pipeline → LLM API → Cache (Redis) → DB. Caching: 50% cost reduction." 
        },
        { 
          q: "How to reduce hallucinations?", 
          answer: "1) RAG with source attribution 2) Confidence scoring 3) Consistency checks (ask 3x) 4) Fact verification 5) Output validation. Reduced TCS banking bot hallucinations from 3% → 0.5%." 
        }
      ]
    }
  ]
};
