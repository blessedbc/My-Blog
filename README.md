# My Blog

A modern, responsive blog built with Next.js, TypeScript, and Tailwind CSS. Features markdown support, component-based architecture, and comprehensive testing.

## Features

- ✨ **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- 📝 **Markdown Support**: Convert markdown content to HTML using `marked`
- 🎨 **Beautiful UI**: Responsive design with Tailwind CSS
- 🧩 **Component-Based**: Modular, reusable components
- 🧪 **Comprehensive Testing**: Jest and React Testing Library
- 📱 **Mobile-First**: Responsive design for all devices
- ⚡ **Fast Performance**: Optimized for speed and SEO

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-blog/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── post[slug]page.tsx # Individual post page
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── PostCard.tsx     # Post preview card
│   │   ├── PostList.tsx     # Grid of post cards
│   │   └── __tests__/       # Component tests
│   └── lib/                 # Utility functions
│       ├── posts.ts         # Post data handling
│       └── __tests__/       # Utility tests
├── posts/                   # Blog post JSON files
├── public/                  # Static assets
└── tests/                   # Test files
```

## Adding New Posts

Create a new JSON file in the `posts/` directory with the following structure:

```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "date": "2025-01-15",
  "content": "# Your Markdown Content\n\nWrite your post content in markdown format..."
}
```

### Supported Markdown Features

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold/Italic**: `**bold**`, `*italic*`
- **Code**: `` `inline code` ``, ```` ```code blocks``` ````
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`
- **Horizontal rules**: `---`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Testing

The project includes comprehensive tests for:

- **Components**: PostCard, PostList, Header, Footer
- **Utilities**: Post data handling functions
- **Integration**: End-to-end functionality

Run tests with:
```bash
npm test
```

## Styling

The project uses Tailwind CSS with custom utilities:

- **Custom Components**: `.btn-primary`, `.btn-secondary`, `.card`
- **Typography**: `.prose-custom` for markdown content
- **Utilities**: `.line-clamp-2`, `.line-clamp-3`, `.text-balance`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Marked](https://marked.js.org/) - Markdown parser
- [Jest](https://jestjs.io/) - Testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing
