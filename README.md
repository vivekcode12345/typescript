# TypeScript Learning Repository

A comprehensive TypeScript learning project demonstrating core TypeScript concepts, best practices, and modern TypeScript features. This repository serves as a practical guide for mastering TypeScript through hands-on examples.

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Topics Covered](#topics-covered)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a collection of TypeScript examples and exercises designed to help developers understand and implement TypeScript concepts effectively. From basic type annotations to advanced features like generics, interfaces, and object-oriented programming, this repository provides practical, runnable code examples.

## ✨ Features

- **Type Safety**: Comprehensive examples of TypeScript's type system
- **Modern TypeScript**: Uses latest TypeScript 6.0 features and best practices
- **Practical Examples**: Real-world code patterns and use cases
- **Well-Structured**: Organized by topic for easy navigation
- **Strict Mode**: Configured with strict TypeScript settings for best practices

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **TypeScript** (v6.0.3 or higher)

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Typescript
```

2. Install dependencies:
```bash
npm install
```

3. Compile TypeScript to JavaScript:
```bash
npm run dev
```

## 📁 Project Structure

```
Typescript/
├── src/
│   ├── index.ts              # Entry point with basic function example
│   ├── typesinTs.ts          # Basic type annotations and variables
│   ├── interface.ts          # Interfaces, type aliases, and unions
│   ├── interFaceAndGen.ts    # Interfaces with generics
│   ├── Generics.ts           # Generic functions and interfaces
│   ├── objectTs.ts           # Object types and type inference
│   ├── arrayEnum.ts          # Array types and enums
│   ├── functionTs.ts         # Function types and signatures
│   ├── unionAndany.ts        # Union types and any type usage
│   ├── typeNarrowing.ts      # Type narrowing techniques
│   ├── moreTypes.ts          # Advanced type concepts
│   ├── oops.ts               # Object-oriented programming in TypeScript
│   ├── webRec.ts             # Web-related TypeScript patterns
│   └── fetchReq.ts           # Async/await and API calls
├── dist/                     # Compiled JavaScript output
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 💻 Usage

### Development Mode
Compile TypeScript files to JavaScript:
```bash
npm run dev
```

### Run the Application
Execute the compiled JavaScript:
```bash
npm start
```

### Individual File Compilation
Compile specific TypeScript files:
```bash
npx tsc src/filename.ts
```

## 📖 Topics Covered

### 1. Basic Types & Variables
- Primitive types (string, number, boolean)
- Type inference
- Type annotations
- Variable declarations

### 2. Interfaces & Type Aliases
- Interface definitions
- Type aliases
- Optional properties
- Readonly properties
- Union types
- Intersection types

### 3. Generics
- Generic functions
- Generic interfaces
- Generic classes
- Type parameters
- Multiple type parameters

### 4. Object-Oriented Programming
- Classes and constructors
- Access modifiers (public, private, protected)
- Abstract classes
- Static members
- Readonly properties
- Getter and setter methods
- Dependency injection

### 5. Advanced Types
- Type narrowing
- Type guards
- Discriminated unions
- Index signatures
- Literal types

### 6. Functions
- Function types
- Parameter types
- Return types
- Optional and default parameters
- Rest parameters

### 7. Async Programming
- Promise types
- Async/await syntax
- Error handling
- API integration with fetch

## 🛠️ Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run the compiled JavaScript application |
| `npm run dev` | Compile TypeScript files using TypeScript compiler |

## 🔧 Technologies

- **TypeScript** - Typed superset of JavaScript
- **Node.js** - JavaScript runtime environment
- **Axios** - HTTP client for API requests (optional dependency)
- **ES Modules** - Modern JavaScript module system

## 📝 TypeScript Configuration

The project uses a strict TypeScript configuration (`tsconfig.json`) with the following key settings:

- **Strict Mode**: Enabled for maximum type safety
- **Target**: ESNext for modern JavaScript features
- **Module**: NodeNext for Node.js compatibility
- **Source Maps**: Disabled for production
- **No Unchecked Indexed Access**: Enabled for safer array/object access
- **Exact Optional Property Types**: Enabled for precise optional property handling

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Vivek Verma**

## 🙏 Acknowledgments

- TypeScript Documentation: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- TypeScript Playground: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

---

## 📚 Learning Resources

- [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Exercises](https://typescript-exercises.github.io/)

---

**Note**: This is a learning repository. Feel free to experiment with the code, modify examples, and add new TypeScript concepts as you learn them!

**Last Updated**: July 2026