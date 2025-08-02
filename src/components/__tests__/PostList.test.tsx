import { render, screen } from '@testing-library/react'
import PostList from '../PostList'

const mockPosts = [
  {
    slug: 'post-1',
    title: 'First Post',
    date: '2025-01-15',
    excerpt: 'First post excerpt',
  },
  {
    slug: 'post-2',
    title: 'Second Post',
    date: '2025-01-10',
    excerpt: 'Second post excerpt',
  },
]

describe('PostList', () => {
  it('renders all posts', () => {
    render(<PostList posts={mockPosts} />)
    expect(screen.getByText('First Post')).toBeInTheDocument()
    expect(screen.getByText('Second Post')).toBeInTheDocument()
  })

  it('renders correct number of post cards', () => {
    render(<PostList posts={mockPosts} />)
    const postCards = screen.getAllByText(/First Post|Second Post/)
    expect(postCards).toHaveLength(2)
  })

  it('displays "No posts found" when posts array is empty', () => {
    render(<PostList posts={[]} />)
    expect(screen.getByText('No posts found')).toBeInTheDocument()
    expect(screen.getByText('Check back later for new content!')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<PostList posts={mockPosts} />)
    expect(screen.getByText('First post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Second post excerpt')).toBeInTheDocument()
  })
}) 