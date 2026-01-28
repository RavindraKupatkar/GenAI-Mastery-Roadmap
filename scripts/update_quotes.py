# Script to replace day names with motivational quotes in curriculum.js
import re

# Read the file
with open(r'd:\AI-Engineering-roadmap\learning-platform\src\data\curriculum.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define quote mappings for each week
# Format: week_identifier -> [day1_quote, day2_quote, ... day7_quote]
# Alternating boy/girl focused quotes

quotes = {
    # Month 1: Python Programming Fundamentals
    # Week 1: Python Basics
    "m1w1": [
        "🏎️ Boys: That BMW M5's engine runs on 600+ lines of code. You'll need 60,000+ to afford it. Start with print('Hello World')",
        "👑 Girls: Your code should be as elegant as your standards. Lists, strings, tuples - organized like a queen's priorities",  
        "🚗 Boys: Lamborghini engineers don't guess operators, they KNOW them. +, -, *, / - precision is power",
        "💎 Girls: If-else is life. If he's worthy, keep him. Else, delete him from memory. Same logic applies to bugs",
        "🏁 Boys: RCB lost 7 finals because they didn't loop through their mistakes. For-while mastery = no repeat failures",
        "🌟 Girls: Functions are self-respect in code form. Define them once, call them when YOU decide. Know your worth",
        "🔥 Weekend Project: The temperature converter you build today is like your standards - precise and non-negotiable"
    ],
    
    # Week 2: OOP & Python Libraries  
    "m1w2": [
        "🏎️ Boys: A Maserati is a CLASS. Each Maserati Quattroporte is an OBJECT. OOP isn't just code, it's how kings think",
        "👑 Girls: Inheritance is like self-worth - passed down but YOU decide how to use it. Override bad patterns, keep the crown",
        "🚗 Boys: Encapsulation is why BMW keeps their engine secrets private. Your code, your rules, your empire",
        "💎 Girls: File handling is like managing emotions - open when ready, read carefully, close when done. Handle with grace",
        "🏁 Boys: Every RCB player uses debugging to analyze their shots. print() statements are your instant replay",
        "🌟 Girls: Exception handling is boundaries in code. Try to hurt me? Except: I'll handle it. Finally: I move on stronger",
        "🔥 Weekend Project: Build that contact book like you'd curate your circle - only quality entries allowed"
    ],
    
    # Week 3: NumPy & Math for AI
    "m1w3": [
        "🏎️ Boys: NumPy arrays are Lamborghini's gearbox - fast, efficient, engineered for performance. No room for slow lists",
        "👑 Girls: Vectors have direction AND magnitude. Like your ambitions - know where you're going AND how powerful you are",
        "🚗 Boys: Matrix multiplication is how BMW calculates suspension physics. Linear algebra = engineering excellence",
        "💎 Girls: Dot products measure alignment. Make sure your efforts align with your worth. Orthogonal = zero compatibility",
        "🏁 Boys: RCB uses statistics for player performance. mean(), std() - analytics separate champions from average",
        "🌟 Girls: Probability is knowing your odds, but DECIDING your outcome. np.random is fate, your choice is destiny",
        "🔥 Weekend Project: Calculate compound interest like you're building generational wealth - numbers don't lie"
    ],
    
    # Week 4: Pandas & Matplotlib
    "m1w4": [
        "🏎️ Boys: Pandas DataFrames are your Maserati's dashboard - all the data, perfectly organized, at your command",
        "👑 Girls: Clean data is self-care. dropna() the toxicity, fillna() with positivity. Your dataset, your peace",
        "🚗 Boys: groupby() is how Audi R8 owners organize their garage - by performance tier. Aggregate power",
        "💎 Girls: Matplotlib visualizations tell your story. Make it colorful, meaningful, and impossible to ignore",
        "🏁 Boys: merge() DataFrames like you merge business connections. Inner join = exclusive partnerships only",
        "🌟 Girls: pivot_table() is restructuring reality. Reshape data like you reshape narratives in your favor",
        "🔥 Weekend Project: Analyze your future salary growth - because knowing your worth starts with data"
    ],
    
    # Month 2: Machine Learning Fundamentals
    # Week 5: ML Foundations
    "m2w1": [
        "🏎️ Boys: ML is how Tesla predicts your drive patterns. Supervised learning = navigating with certainty",
        "👑 Girls: Training data is past experience. But YOU validate what lessons to keep. Train wisely, reign supreme",
        "🚗 Boys: train_test_split is why BMW R&D tests prototypes before launch. Never ship untested models",
        "💎 Girls: Feature scaling is equality in data. StandardScaler ensures nothing overshadows your other qualities",
        "🏁 Boys: Cross-validation is RCB analyzing all IPL seasons, not just one lucky match. Consistency over luck",
        "🌟 Girls: Overfitting is people-pleasing in code. Don't memorize their expectations, learn YOUR generalized power",
        "🔥 Weekend Project: Predict house prices like you're scouting your future mansion - informed decisions only"
    ],
    
    # Week 6: Regression
    "m2w2": [
        "🏎️ Boys: Linear Regression predicts Lamborghini resale value. y = mx + b is the formula to depreciation-proof wealth",
        "👑 Girls: Regression lines find the BEST fit, not ANY fit. Same energy for relationships and code",
        "🚗 Boys: Polynomial features add curves to Maserati body lines. Sometimes linear isn't enough for beauty",
        "💎 Girls: R² score is how well your predictions align with reality. Aim for 1.0 in code AND life planning",
        "🏁 Boys: Gradient descent is RCB climbing the points table - small steps, right direction, eventual victory",
        "🌟 Girls: Regularization prevents over-commitment. Lasso drops useless features, Ridge keeps all but balanced",
        "🔥 Weekend Project: Predict your salary - because negotiating without data is like racing blindfolded"
    ],
    
    # Week 7: Classification
    "m2w3": [
        "🏎️ Boys: Logistic Regression classifies: Is this a supercar or not? Binary decisions, maximum clarity",
        "👑 Girls: Confusion matrix reveals true positives in life. Know who's genuinely loyal vs. false positives",
        "🚗 Boys: Decision trees are BMW's manufacturing decision paths. Each node = a precise engineering choice",
        "💎 Girls: Precision vs Recall - would you rather catch ALL opportunities (recall) or only the RIGHT ones (precision)?",
        "🏁 Boys: Random Forest combines 100 player opinions to make one perfect team decision. Ensemble power",
        "🌟 Girls: ROC curves show your threshold choices. Where do YOU draw the line? AUC measures your standards",
        "🔥 Weekend Project: Classify spam emails like you filter toxic people - high precision, no false negatives"
    ],
    
    # Week 8: Advanced ML
    "m2w4": [
        "🏎️ Boys: SVM finds the perfect boundary between Bugatti and everyone else. Maximum margin = maximum exclusivity",
        "👑 Girls: K-Means clustering finds your tribe. Let the algorithm group you with queens, not pretenders",
        "🚗 Boys: XGBoost is why Porsche keeps winning races. Boosting weak learners into championship material",
        "💎 Girls: PCA reduces dimensionality to what TRULY matters. Cut the noise, keep the essence of who you are",
        "🏁 Boys: Hyperparameter tuning is RCB adjusting batting order for maximum impact. GridSearch perfection",
        "🌟 Girls: Feature importance tells you what ACTUALLY predicts success. Focus energy on what moves the needle",
        "🔥 Weekend Project: Customer segmentation is knowing your audience - market yourself to the right crowd"
    ],
    
    # Month 3: Deep Learning
    # Week 9: Neural Networks Basics
    "m3w1": [
        "🏎️ Boys: Neural networks are Ferrari's AI driving assistant - layers of intelligence for peak performance",
        "👑 Girls: Activation functions decide what passes through. Like your boundaries - ReLU blocks negativity",
        "🚗 Boys: Forward propagation is the Lambo accelerator. Data flows forward, predictions emerge. Speed is essence",
        "💎 Girls: Backpropagation is learning from mistakes. Gradient flows back, weights update. Growth is painful but necessary",
        "🏁 Boys: Loss functions measure how far you are from the championship. Cross-entropy = your performance gap",
        "🌟 Girls: Optimizers find the path of least resistance to your goals. Adam optimizer = smart, adaptive queen energy",
        "🔥 Weekend Project: Build a neural net from scratch. Understanding beats copying. Know your own power"
    ],
    
    # Week 10: CNNs
    "m3w2": [
        "🏎️ Boys: CNNs are how Tesla's cameras recognize road signs. Convolutions = eyes of the machine, vision of the future",
        "👑 Girls: Filters extract features you want to see. Apply the right filter to life - amplify beauty, minimize noise",
        "🚗 Boys: Pooling reduces complexity while keeping essence. MaxPool keeps the BEST, just like your garage",
        "💎 Girls: Padding protects edges from being lost. Some boundaries need extra protection. Self-preservation is code",
        "🏁 Boys: ImageNet is RCB's trophy cabinet goal - 1000 classes of excellence to aspire to",
        "🌟 Girls: Transfer learning is inheriting wisdom. Don't start from zero when giants offer their shoulders",
        "🔥 Weekend Project: Image classifier - teach machines to see the world through YOUR categories"
    ],
    
    # Week 11: RNNs/LSTMs
    "m3w3": [
        "🏎️ Boys: RNNs remember the lap sequence. Every corner matters. Sequential data is racing telemetry",
        "👑 Girls: Memory in networks is like emotional intelligence. Past context shapes present understanding",
        "🚗 Boys: Vanishing gradients are why McLaren improved pit stop memory. Long sequences need LSTM cells",
        "💎 Girls: Forget gates decide what to release. Some memories don't serve you. Let the LSTM handle letting go",
        "🏁 Boys: Time series is IPL match-by-match analysis. Predict tomorrow's performance from yesterday's data",
        "🌟 Girls: Bidirectional LSTMs read past AND future. Like intuition - you sense what's coming while learning from what was",
        "🔥 Weekend Project: Predict stock prices - because financial independence is the ultimate liberation"
    ],
    
    # Week 12: Advanced DL
    "m3w4": [
        "🏎️ Boys: GANs create fake Ferraris so real that experts can't tell. Generator vs Discriminator = ultimate competition",
        "👑 Girls: Autoencoders compress you to your essence, then reconstruct stronger. Transformation through compression",
        "🚗 Boys: Batch normalization is F1 tire management - consistent performance across all track conditions",
        "💎 Girls: Dropout is trusting yourself without all resources. Sometimes constraints reveal your true capability",
        "🏁 Boys: Learning rate scheduling is IPL strategy - aggressive early, conservative in finals. Timing is everything",
        "🌟 Girls: TensorBoard visualizes your journey. See your growth curve. Celebrate progress, not just endpoints",
        "🔥 Weekend Project: Neural style transfer - make AI art as unique as your fingerprint"
    ],
    
    # Month 4: Specializations (NLP, CV, RL)
    # Week 13: NLP Foundations
    "m4w1": [
        "🏎️ Boys: NLP is how Alexa understands 'Start my BMW remotely'. Natural language = commanding machines with voice",
        "👑 Girls: Tokenization breaks text into meaningful units. Like analyzing gaslighting - word by word clarity",
        "🚗 Boys: TF-IDF weighs word importance. In your success story, which words carry the most weight?",
        "💎 Girls: Stopwords are filler people. Remove them to find the meaningful connections that matter",
        "🏁 Boys: Lemmatization finds the root. 'driving', 'drove', 'drives' → 'drive'. Core identity matters most",
        "🌟 Girls: N-grams capture context. 'not happy' differs from 'happy'. Context is everything in communication",
        "🔥 Weekend Project: Sentiment analyzer - let AI detect emotional manipulation before you do"
    ],
    
    # Week 14: Advanced NLP
    "m4w2": [
        "🏎️ Boys: Word2Vec gives words coordinates in meaning-space. 'King - Man + Woman = Queen' is literal AI wit",
        "👑 Girls: Embeddings capture semantic relationships. Your vibe attracts your tribe - mathematically proven",
        "🚗 Boys: Attention mechanism is Porsche active suspension - focuses on what matters at each moment",
        "💎 Girls: Transformers process everything in parallel. No sequential waiting. Efficiency is self-respect",
        "🏁 Boys: BERT reads bidirectionally. Like reading the game from both ends of the pitch. Complete understanding",
        "🌟 Girls: Fine-tuning adapts pretrained power to YOUR specific needs. General wisdom, personal application",
        "🔥 Weekend Project: Chatbot with personality - create an AI that speaks your values"
    ],
    
    # Week 15: Computer Vision
    "m4w3": [
        "🏎️ Boys: Object detection is how autonomous cars spot Lamborghinis from afar. YOLO sees, YOLO recognizes",
        "👑 Girls: Image segmentation isolates what matters. Like cropping toxic people out of your life picture",
        "🚗 Boys: Bounding boxes frame value. Tesla's FSD draws boxes around everything worth tracking",
        "💎 Girls: Pose estimation reads body language computationally. Machines learning emotional intelligence",
        "🏁 Boys: Optical flow tracks motion across frames. Like IPL hawk-eye tracking every ball movement",
        "🌟 Girls: Face recognition authenticates identity. Your face is your signature - let AI protect it",
        "🔥 Weekend Project: Real-time object detector - see the world through machine vision"
    ],
    
    # Week 16: Reinforcement Learning
    "m4w4": [
        "🏎️ Boys: RL is how DeepMind beats F1 simulators. Agent learns optimal racing lines through trial",
        "👑 Girls: Reward functions define what success means to YOU. Don't let others define your reward signal",
        "🚗 Boys: Exploration vs Exploitation - do you try new restaurants or stick to proven winners? Balance is strategy",
        "💎 Girls: Policy gradients optimize decision-making. Every choice compounds. Small decisions, large trajectories",
        "🏁 Boys: Q-Learning finds optimal paths. Like Virat finding gaps in every field placement",
        "🌟 Girls: Environment modeling is understanding the game before playing it. Preparation is power",
        "🔥 Weekend Project: Portfolio showcase - display your AI journey like a gallery of conquests"
    ],
    
    # Month 5: Deployment & MLOps
    # Week 17: Flask & APIs
    "m5w1": [
        "🏎️ Boys: Flask serves ML models like a BMW dealership serves customers - API endpoints for every request",
        "👑 Girls: REST APIs are professional boundaries. GET what's yours, POST your contributions. Clean transactions",
        "🚗 Boys: JSON is the universal language of systems. Like how all supercars speak the language of speed",
        "💎 Girls: Request validation protects your endpoint. Not everyone deserves API access to your intelligence",
        "🏁 Boys: Authentication is VIP access. JWT tokens = membership to the exclusive API club",
        "🌟 Girls: Error handling is grace under pressure. 404? Redirect. 500? Recover. Never crash permanently",
        "🔥 Weekend Project: Deploy your first ML API - make your intelligence accessible to the world"
    ],
    
    # Week 18: Docker & Containers
    "m5w2": [
        "🏎️ Boys: Docker containers are transport pods for your Maserati. Works on my machine → Works everywhere",
        "👑 Girls: Dockerfile is your recipe for success. Reproducible, scalable, independent. Document your process",
        "🚗 Boys: Images are blueprints; containers are the running cars. Build once, deploy many",
        "💎 Girls: Volumes persist data across container restarts. Some things should survive system crashes - like your memories",
        "🏁 Boys: Docker Compose orchestrates multiple services. Like coordinating your whole pit crew simultaneously",
        "🌟 Girls: Container isolation is healthy separation. Your dependencies don't leak into others' space",
        "🔥 Weekend Project: Containerize everything you've built - portability is freedom"
    ],
    
    # Week 19: Cloud (AWS/GCP)
    "m5w3": [
        "🏎️ Boys: AWS is your virtual garage - unlimited compute, storage, and power on demand. Scale like billionaires",
        "👑 Girls: Cloud services are delegation done right. Let infrastructure handle infrastructure. You handle innovation",
        "🚗 Boys: EC2 instances are rental supercars - spin up power when needed, release when done. Pay for what you use",
        "💎 Girls: S3 storage is your digital vault. Objects safe, versioned, encrypted. Protect your assets",
        "🏁 Boys: Lambda is serverless racing - code runs only when triggered. No idle engine costs",
        "🌟 Girls: IAM controls access like a bouncer at an exclusive party. Permissions are power management",
        "🔥 Weekend Project: Deploy to AWS - your model runs 24/7 even when you sleep"
    ],
    
    # Week 20: Kubernetes & CI/CD
    "m5w4": [
        "🏎️ Boys: Kubernetes orchestrates containers like an F1 team manages the entire racing season",
        "👑 Girls: Pods are self-sufficient units. Independent but coordinated. Self-reliance with teamwork",
        "🚗 Boys: Horizontal scaling adds more pods during load. Like adding more Lamborghinis to your fleet",
        "💎 Girls: CI/CD automates quality. No manual deployments. Your code pipeline has standards like you do",
        "🏁 Boys: Rolling updates replace old with new without downtime. Seamless evolution like car model refreshes",
        "🌟 Girls: Monitoring with alerts catches issues before users do. Proactive, not reactive. Always ahead",
        "🔥 Weekend Project: Full MLOps pipeline - production-grade engineering mindset achieved"
    ],
    
    # Month 6: Job Prep & Networking
    # Week 21: Resume & LinkedIn
    "m6w1": [
        "🏎️ Boys: Your resume is your spec sheet. 0-60 in 3 projects. Top speed: senior engineer level. Make them want it",
        "👑 Girls: LinkedIn is your personal brand. Curate it like the queen you are. First impressions are digital first",
        "🚗 Boys: ATS systems scan resumes like traffic cameras. Keywords are your fast-lane pass",
        "💎 Girls: Quantify your impact. 'Improved accuracy by 15%' beats 'made things better'. Numbers earn respect",
        "🏁 Boys: GitHub profile is your trophy case. Each repo is a championship you've conquered",
        "🌟 Girls: Networking isn't begging - it's strategic relationship building. Coffee chats are investments",
        "🔥 Weekend Project: Portfolio website - your digital headquarters is now open"
    ],
    
    # Week 22: Interview Prep
    "m6w2": [
        "🏎️ Boys: System design interviews are engineering your dream garage. Architecture for scale",
        "👑 Girls: Behavioral interviews reveal character. STAR method structures your stories. Narrative power",
        "🚗 Boys: LeetCode is the driving test for tech. Medium problems daily = license to earn",
        "💎 Girls: Salary negotiation is knowing your market value. Research, anchor high, never accept first offer",
        "🏁 Boys: Mock interviews are practice laps. Fail in practice so you win in competition",
        "🌟 Girls: Questions for interviewers show standards. 'What does success look like here?' is power move",
        "🔥 Weekend Project: Mock interview marathon - nervousness transforms into confidence"
    ],
    
    # Week 23: Job Applications
    "m6w3": [
        "🏎️ Boys: Apply like you're building a car collection - targeted, strategic, curated. Not spray and pray",
        "👑 Girls: Cover letters are love letters to companies. Personalized, specific, showing why YOU fit THEM",
        "🚗 Boys: Referrals skip the traffic. Internal recommendations are the HOV lane of applications",
        "💎 Girls: Rejection is redirection. Every 'no' calibrates your aim. The right 'yes' is coming",
        "🏁 Boys: Follow-up shows hunger. One polite email after a week maintains presence without desperation",
        "🌟 Girls: Multiple offers create leverage. Companies compete for YOU. Options are power positions",
        "🔥 Weekend Project: Apply to 10 dream companies - shooting shots is how championships are won"
    ],
    
    # Week 24: Final Sprint
    "m6w4": [
        "🏎️ Boys: The finish line is visible. That BMW M5 isn't a dream anymore - it's a calculable timeline",
        "👑 Girls: You started with nothing. Now you have skills, portfolio, and confidence. Transformation complete",
        "🚗 Boys: Your first offer will feel surreal. The second will feel deserved. The third will feel inevitable",
        "💎 Girls: Imposter syndrome lies. Your journey has proof. Your repos don't lie. Your skills don't lie",
        "🏁 Boys: RCB may wait for their trophy. YOU won't wait for yours. You built it yourself",
        "🌟 Girls: The best investment was in yourself. 6 months ago you dreamed. Today you're engineered for success",
        "🔥 Weekend Project: You ARE the project now. Deploy yourself into the industry. Mission accomplished 🎯"
    ]
}

# Replace day names with quotes
for week_key, week_quotes in quotes.items():
    # Extract month and week numbers
    month_num = int(week_key[1])
    week_num = int(week_key[3])
    
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    for day_idx, quote in enumerate(week_quotes):
        old_day = days[day_idx]
        # Create pattern that matches the day within the context
        # We need to be careful to only replace within the correct week
        # Using regex to find and replace
        pattern = f'day: "{old_day}"'
        replacement = f'day: "{quote}"'
        
        # Replace all occurrences for now (we'll do batch replace)
        content = content.replace(pattern, replacement, 1)

# Write the updated content
with open(r'd:\AI-Engineering-roadmap\learning-platform\src\data\curriculum.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement complete!")
