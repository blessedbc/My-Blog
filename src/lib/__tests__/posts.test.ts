import { getAllPosts, getPostBySlug, getAllPostSlugs } from '../posts'

// Mock fs module
const mockFs = {
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
  existsSync: jest.fn(),
}

// Mock path module
const mockPath = {
  join: jest.fn(),
  cwd: jest.fn(() => '/mock/cwd'),
}

jest.mock('fs', () => mockFs)
jest.mock('path', () => mockPath)

describe('posts utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockPath.join.mockImplementation((...args) => args.join('/'))
  })

  describe('getAllPosts', () => {
    it('returns sorted posts with excerpts', () => {
      const mockFiles = ['post1.json', 'post2.json']
      const mockPost1 = {
        slug: 'post1',
        title: 'First Post',
        date: '2025-01-10',
        content: 'This is the first post content with some markdown **bold** text.',
      }
      const mockPost2 = {
        slug: 'post2',
        title: 'Second Post',
        date: '2025-01-15',
        content: 'This is the second post content.',
      }

      mockFs.readdirSync.mockReturnValue(mockFiles)
      mockFs.readFileSync
        .mockReturnValueOnce(JSON.stringify(mockPost1))
        .mockReturnValueOnce(JSON.stringify(mockPost2))

      const result = getAllPosts()

      expect(result).toHaveLength(2)
      expect(result[0].slug).toBe('post2') // Should be sorted by date (newest first)
      expect(result[1].slug).toBe('post1')
      expect(result[0].excerpt).toBeDefined()
      expect(result[1].excerpt).toBeDefined()
    })

    it('filters out non-json files', () => {
      const mockFiles = ['post1.json', 'post2.txt', 'post3.json']
      const mockPost1 = {
        slug: 'post1',
        title: 'First Post',
        date: '2025-01-10',
        content: 'Test content',
      }
      const mockPost3 = {
        slug: 'post3',
        title: 'Third Post',
        date: '2025-01-15',
        content: 'Test content',
      }

      mockFs.readdirSync.mockReturnValue(mockFiles)
      mockFs.readFileSync
        .mockReturnValueOnce(JSON.stringify(mockPost1))
        .mockReturnValueOnce(JSON.stringify(mockPost3))

      getAllPosts()

      expect(mockFs.readFileSync).toHaveBeenCalledTimes(2) // Only JSON files
    })
  })

  describe('getPostBySlug', () => {
    it('returns post when it exists', () => {
      const mockPost = {
        slug: 'test-post',
        title: 'Test Post',
        date: '2025-01-15',
        content: 'Test content',
      }

      mockFs.existsSync.mockReturnValue(true)
      mockFs.readFileSync.mockReturnValue(JSON.stringify(mockPost))

      const result = getPostBySlug('test-post')

      expect(result).toEqual(mockPost)
    })

    it('returns null when post does not exist', () => {
      mockFs.existsSync.mockReturnValue(false)

      const result = getPostBySlug('non-existent-post')

      expect(result).toBeNull()
    })
  })

  describe('getAllPostSlugs', () => {
    it('returns array of slugs without .json extension', () => {
      const mockFiles = ['post1.json', 'post2.json', 'readme.txt']
      mockFs.readdirSync.mockReturnValue(mockFiles)

      const result = getAllPostSlugs()

      expect(result).toEqual(['post1', 'post2'])
    })
  })
}) 