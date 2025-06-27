# GitHub Profile Fetcher

A React-based web application that allows users to search and display GitHub user profiles, repositories, followers, and following information using the GitHub API.

## 🚀 Features

- **User Profile Search**: Search for any GitHub user by their username
- **Profile Information Display**: View user's profile picture, name, and username
- **Statistics Overview**: Display follower count, repository count, and following count
- **Direct Links**: Click on statistics to navigate to the user's GitHub profile sections
- **Responsive Design**: Clean and modern UI using Semantic UI React
- **Error Handling**: Graceful error handling for invalid usernames or API issues

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **Semantic UI React 2.1.5** - UI component library
- **GitHub REST API** - For fetching user data
- **CSS3** - Custom styling
- **JavaScript ES6+** - Modern JavaScript features

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Github-profile-fetcher-with-React.git
   cd Github-profile-fetcher-with-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🎯 Usage

1. **Default View**: The application loads with a default GitHub user profile (Hassanadelani1)
2. **Search for Users**: 
   - Enter any GitHub username in the search input field
   - Click the "Search" button or press Enter
3. **View Profile Information**:
   - Profile picture
   - User's full name and username
   - Number of followers
   - Number of public repositories
   - Number of users they're following
4. **Navigate to GitHub**: Click on any statistic to open the corresponding section on GitHub

## 📁 Project Structure

```
Github-profile-fetcher-with-React/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Custom styles
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 API Usage

This application uses the GitHub REST API v3 to fetch user data:

- **Base URL**: `https://api.github.com/users/{username}`
- **Rate Limits**: GitHub API has rate limits for unauthenticated requests
- **Data Retrieved**: User profile information, statistics, and avatar

## 🎨 Features in Detail

### User Interface
- Clean, modern design with Semantic UI components
- Responsive layout that works on desktop and mobile
- Intuitive search functionality
- Error messages for invalid usernames

### Data Display
- User avatar with proper sizing
- User's full name and GitHub username
- Interactive statistics with direct links to GitHub
- Real-time data fetching from GitHub API

## 🚨 Error Handling

The application handles various error scenarios:
- Invalid GitHub usernames
- Network connectivity issues
- API rate limiting
- Server errors

## 🔮 Future Enhancements

Potential improvements for the application:
- Add authentication for higher API rate limits
- Display user's recent repositories
- Show user's bio and location
- Add pagination for followers/following lists
- Implement caching for better performance
- Add dark/light theme toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hassan Adelani**
- GitHub: [@Hassanadelani1](https://github.com/Hassan-Adelani-Luqman)

## 🙏 Acknowledgments

- GitHub for providing the REST API
- Semantic UI React for the beautiful UI components
- Create React App for the project scaffolding

---

**Note**: This application uses the public GitHub API. For production use with higher rate limits, consider implementing GitHub OAuth authentication.