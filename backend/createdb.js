const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

dbName = 'QuizAppDB'

MongoClient.connect(url, { useNewUrlParser: true },
	(err, client) => {
		if (err) {
			console.log('Unable to connect to db');
		}

		const db = client.db(dbName);
		db.collection('quizes').insertOne({
			quizCode : 'SE01',
			course: 'Software Engineering',
			topic: 'Intro to SE',
			isAvailable : true,
			due: '21-Feb-20 5:00 pm',
			resultRelease : 'false',
			prvQuiz : false,
			questions : 
			[
			  {
				question : 'Who typically performs Unit Testing?',
				options : ['End user', 'QA Engineer', 'Developer', 'Scrum master'],
				correctAns : 'A'
			  },
			  {
				question : 'What is getting evaluated today?',
				options : ['Sprint 1 Review', 'Sprint 1 Planning', 'Sprint 0 planning', 'Sprint 0 Retrospective'],
				correctAns : 'B'
			  },
			  {
				question : 'Which of the following activity is the last activity in a sprint?',
				options : ['Sprint review', 'Sprint planning', 'Spring retrospective', 'Standup meeting'],
				correctAns : 'A'
			  },
			  {
				question : 'Which of the following keyword(s) describes the precise outcome of a sprint?',
				options : ['None of these', 'Fully tested product', 'Some features of the product', 'Potentially shippable product increment'],
				correctAns : 'D'
			  },
			  {
				question : 'Who helps in removing impediments in the scrum team ',
				options : ['Technical Manager', 'Test Engineer', 'Impediment expert', 'Scrum master'],
				correctAns : 'D'
			  },
			]
		  })
		  
		  db.collection('quizes').insertOne({
			quizCode : 'SE02',
			course: 'Software Engineering',
			isAvailable : true,
			topic: 'Testing',
			due: '24-Feb-20 6:00 pm',
			date : "24-Feb-20",
			resultRelease : 'false',
			prvQuiz : true,
			questions : 
			[
			  {
				question : 'Who typically performs Unit Testing?',
				options : ['End user', 'QA Engineer', 'Developer', 'Scrum master'],
				correctAns : 'A'
			  },
			  {
				question : 'What is getting evaluated today?',
				options : ['Sprint 1 Review', 'Sprint 1 Planning', 'Sprint 0 planning', 'Sprint 0 Retrospective'],
				correctAns : 'B'
			  },
			  {
				question : 'What is the primary requirements validation mechanism?',
				options : ['Technical Review', 'Testing', 'Sprint Review', 'Sprint Retrospective'],
				correctAns : 'A'
			  },
			  {
				question : 'Which of the following is NOT an Agile Manifesto value?',
				options : ['Working Software', 'Contract Negotiation', 'Customer Collaboration', 'Responding to Change'],
				correctAns : 'D'
			  },
			  {
				question : 'Which of the following is NOT a problem that occurs as Elicitation happens? ',
				options : ['Problems of understanding', 'Problems of Volatility', 'Problems of verification', 'Problems of Scope'],
				correctAns : 'D'
			  },
			]
		  })
		  db.collection('quizes').insertOne({
			quizCode : 'CD01',
			course: 'Compiler Design',
			isAvailable : true,
			due: '19-Feb-20 6:00 pm',
			resultRelease : 'false',
			prvQuiz : false,
			topic : 'Intro to CD',
			questions : 
			[
			  {
				question : 'Which of the following derivations does a top-down parser use while parsing an input string? The input is assumed to be scanned in left to right order ?',
				options : [' Leftmost derivation', ' Leftmost derivation traced out in reverse', 'Rightmost derivation', 'Rightmost derivation traced out in reverse'],
				correctAns : 'A'
			  },
			  {
				question : 'The process of assigning load addresses to the various parts of the program and adjusting the code and data in the program to reflect the assigned addresses is called ?',
				options : ['Assembly', 'Parsing', 'Relocation', 'Symbol resolution'],
				correctAns : 'B'
			  },
			  {
				question : ' Which of the following statements is false?',
				options : [' An unambiguous grammar has same leftmost and rightmost derivation', 'An LL(1) parser is a top-down parser', 'LALR is more powerful than SLR', 'An ambiguous grammar can never be LR(k) for any k'],
				correctAns : 'A'
			  },
			  {
				question : `Which of the following grammar rules violate the requirements of an operator grammar? P, Q, R are nonterminals, and r,s,t are terminals
				(i) P -> QR
				(ii) P -> QsR
				(iii) P -> ε
				(iV) P -> QtRr`,
				options : [' (i) only', ' (i) and (iii) only', '(ii) and (iii) only', '(iii) and (iv) only'],
				correctAns : 'D'
			  },
			  {
				question : `Consider the grammar with the following translation rules and E as the start symbol.
				 E -> E1 #T {E.value = E1.value * T.value| T {E.value = T.value}
				 T -> T1 & F {T.value = T1.value + F.value}|F {T.value= F.value}
				 F -> num {F.value = num.value}
	  Compute E.value for the root of the parse tree for the expression:2 # 3 & 5 # 6 &4. `,
				options : [' 200', '180', '160', ' 40'],
				correctAns : 'D'
			  },
			]
		  })
		  db.collection('quizes').insertOne({
			quizCode : 'CD02',
			course: 'Compiler Design',
			isAvailable : true,
			topic: 'Parsing',
			due: '27-Feb-20 4:00 pm',
			date : "27-Feb-20",
			resultRelease : 'false',
			prvQuiz : true,
			questions : 
			[
			  {
				question : `Given the following expression grammar:
						   E -> E * F | F+E | F
						   F -> F-F | id
						   which of the following is true?`,
				options : ['  * has higher precedence than +', ' – has higher precedence than *', '+ and — have same precedence', '+ has higher precedence than *'],
				correctAns : 'A'
			  },
			  {
				question : 'Consider a program P that consists of two source modules M1 and M2 contained in two different files. If M1 contains a reference to a function defined in M2 the reference will be resolved at ?',
				options : ['Edit time', ' Compile time', 'Link time', 'Load time'],
				correctAns : 'B'
			  },
			  {
				question : '  Which of the following suffices to convert an arbitrary CFG to an LL(1) grammar?',
				options : ['  Removing left recursion alone', 'Factoring the grammar alone', 'Removing left recursion and factoring the grammar', 'None of the above'],
				correctAns : 'A'
			  },
			  {
				question : 'Assume that the SLR parser for a grammar G has n1 states and the LALR parser for G has n2 states. The relationship between nl and n2 is',
				options : ['n1 is necessarily less than n2', 'n1 is necessarily equal to n2', 'n1 is necessarily greater than n2', ' none of the above'],
				correctAns : 'D'
			  },
			 
			]
		  })
		}

		);