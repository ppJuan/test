import React, { useState } from 'react';
import { Input, List } from 'antd';
import { SearchOutlined, AppstoreOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Item 1',
    description: 'Description for item 1',
    image: 'https://source.unsplash.com/random/200x200?sig=1',
  },
  {
    title: 'Item 2',
    description: 'Description for item 2',
    image: 'https://source.unsplash.com/random/200x200?sig=2',
  },
  {
    title: 'Item 3',
    description: 'Description for item 3',
    image: 'https://source.unsplash.com/random/200x200?sig=3',
  },
  // Add more items as needed
];

const SearchList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
      <div className="flex items-center justify-center mb-6">
        <AppstoreOutlined className="text-blue-500 text-4xl mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">搜索列表</h1>
      </div>
      <div>这行文案是在vscode上二次修改的</div>
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined />}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <List
        itemLayout="horizontal"
        dataSource={filteredData}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={item.image} alt={item.title} className="w-16 h-16 rounded" />}
              title={<a href="#">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchList;