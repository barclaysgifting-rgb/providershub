import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerDashboardHeader } from '../components/SellerDashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Image as ImageIcon,
  Video,
  Calendar,
  Tag,
  Save,
  X,
  AlertCircle,
  ExternalLink,
  FileText
} from 'lucide-react';

export default function ManagePortfolio() {
  const navigate = useNavigate();

  // Mock portfolio data
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'Complete CQC Registration Package',
      description: 'Successfully helped a 50-bed care home achieve full CQC registration within 8 weeks. Included comprehensive documentation, staff training, and inspection preparation.',
      category: 'CQC Registration',
      type: 'image',
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
      ],
      tags: ['CQC Registration', 'Care Home', 'Compliance'],
      status: 'published',
      views: 245,
      createdAt: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Compliance Audit',
      description: 'Conducted comprehensive compliance audit for a nursing home chain. Identified 15 improvement areas and developed action plan that resulted in 95% compliance score.',
      category: 'Healthcare Compliance Audit',
      type: 'image',
      images: [
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
      ],
      tags: ['Audit', 'Compliance', 'Quality Assurance'],
      status: 'published',
      views: 189,
      createdAt: '2024-01-10',
      featured: false
    },
    {
      id: 3,
      title: 'Regulatory Documentation Service',
      description: 'Created comprehensive regulatory documentation package for new healthcare startup. Included policies, procedures, and compliance frameworks.',
      category: 'Regulatory Documentation',
      type: 'video',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      tags: ['Documentation', 'Regulatory', 'Startup'],
      status: 'published',
      views: 156,
      createdAt: '2024-01-05',
      featured: false
    },
    {
      id: 4,
      title: 'Care Home Licensing Project',
      description: 'Guided care home through complete licensing process. Achieved license approval in record time with zero deficiencies noted.',
      category: 'Care Home Licensing',
      type: 'image',
      images: [
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
      ],
      tags: ['Licensing', 'Care Home', 'Regulatory'],
      status: 'draft',
      views: 0,
      createdAt: '2024-01-20',
      featured: false
    }
  ]);

  const [editingItem, setEditingItem] = useState<any>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    category: '',
    tags: [] as string[],
    featured: false
  });

  const categories = [
    'CQC Registration',
    'Healthcare Compliance Audit',
    'Care Home Licensing',
    'Regulatory Documentation',
    'Compliance Consulting',
    'Training Services',
    'Software Implementation',
    'Business Consulting',
    'Quality Assurance',
    'Regulatory Compliance'
  ];

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setEditForm({
      title: item.title,
      description: item.description,
      category: item.category,
      tags: [...item.tags],
      featured: item.featured
    });
  };

  const handleSaveEdit = () => {
    setPortfolioItems(prev =>
      prev.map(item =>
        item.id === editingItem.id
          ? { ...item, ...editForm }
          : item
      )
    );
    setEditingItem(null);
  };

  const handleDelete = (id: number) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFeatured = (id: number) => {
    setPortfolioItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, featured: !item.featured }
          : item
      )
    );
  };

  const addTag = (tag: string) => {
    if (!editForm.tags.includes(tag) && editForm.tags.length < 5) {
      setEditForm(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setEditForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const publishedItems = portfolioItems.filter(item => item.status === 'published');
  const draftItems = portfolioItems.filter(item => item.status === 'draft');

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerDashboardHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Manage Portfolio</h1>
              <p className="text-gray-600">
                Showcase your work and manage your portfolio items
              </p>
            </div>
            <Button onClick={() => navigate('/seller/add-portfolio')}>
              <Plus className="mr-2 h-4 w-4" />
              Add Portfolio Item
            </Button>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Items</p>
                  <p className="text-2xl font-bold">{portfolioItems.length}</p>
                </div>
                <ImageIcon className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold">{publishedItems.length}</p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold">
                    {portfolioItems.reduce((sum, item) => sum + item.views, 0).toLocaleString()}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Featured</p>
                  <p className="text-2xl font-bold">
                    {portfolioItems.filter(item => item.featured).length}
                  </p>
                </div>
                <Tag className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Items */}
        <div className="space-y-8">
          {/* Published Items */}
          {publishedItems.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-green-600" />
                Published Portfolio ({publishedItems.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      {item.type === 'image' && item.images && item.images.length > 0 ? (
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <Video className="h-12 w-12 text-gray-400" />
                        </div>
                      )}

                      {item.featured && (
                        <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">
                          Featured
                        </Badge>
                      )}

                      <Badge
                        className={`absolute top-2 right-2 ${
                          item.status === 'published' ? 'bg-green-500' : 'bg-gray-500'
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                        <div className="flex space-x-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Edit Portfolio Item</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label>Title</Label>
                                  <Input
                                    value={editForm.title}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                                  />
                                </div>
                                <div>
                                  <Label>Description</Label>
                                  <Textarea
                                    value={editForm.description}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                                    rows={4}
                                  />
                                </div>
                                <div>
                                  <Label>Category</Label>
                                  <Select value={editForm.category} onValueChange={(value) => setEditForm(prev => ({ ...prev, category: value }))}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {categories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                          {category}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label>Tags</Label>
                                  <div className="flex flex-wrap gap-2">
                                    {editForm.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                        {tag}
                                        <button onClick={() => removeTag(tag)}>×</button>
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    id="featured"
                                    checked={editForm.featured}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, featured: e.target.checked }))}
                                  />
                                  <Label htmlFor="featured">Featured item</Label>
                                </div>
                                <div className="flex space-x-2">
                                  <Button onClick={handleSaveEdit}>Save Changes</Button>
                                  <Button variant="outline" onClick={() => setEditingItem(null)}>Cancel</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFeatured(item.id)}
                          >
                            <Tag className={`h-4 w-4 ${item.featured ? 'text-yellow-500' : 'text-gray-400'}`} />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{item.category}</span>
                        <span>{item.views} views</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Draft Items */}
          {draftItems.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-gray-600" />
                Drafts ({draftItems.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {draftItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden opacity-75">
                    <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
                      {item.type === 'image' ? (
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      ) : (
                        <Video className="h-12 w-12 text-gray-400" />
                      )}
                      <Badge className="absolute top-2 right-2 bg-gray-500">
                        {item.status}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Publish
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {portfolioItems.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <ImageIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Portfolio Items Yet</h3>
              <p className="text-gray-500 mb-4">
                Start building your portfolio to showcase your work and attract more clients.
              </p>
              <Button onClick={() => navigate('/seller/add-portfolio')}>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Portfolio Item
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
}
