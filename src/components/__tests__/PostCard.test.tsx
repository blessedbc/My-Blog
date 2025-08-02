import { render, screen } from '@testing-library/react'
import PostCard from '../PostCard'

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  date: '2025-01-15',
  excerpt: 'This is a test excerpt for the post.',
}

describe('PostCard', () => {
  it('renders post title correctly', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('renders formatted date correctly', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument()
  })

  it('renders excerpt when provided', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('This is a test excerpt for the post.')).toBeInTheDocument()
  })

  it('does not render excerpt when not provided', () => {
    const postWithoutExcerpt = { ...mockPost, excerpt: undefined }
    render(<PostCard post={postWithoutExcerpt} />)
    expect(screen.queryByText('This is a test excerpt for the post.')).not.toBeInTheDocument()
  })

  it('renders "Read more" link', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })

  it('has correct link href', () => {
    render(<PostCard post={mockPost} />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toHaveAttribute('href', '/post/test-post')
  })

  it('renders blog post badge', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Blog Post')).toBeInTheDocument()
  })
}) 