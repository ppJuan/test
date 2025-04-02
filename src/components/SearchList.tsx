    import React, { useState } from 'react';
    import { Input, List } from 'antd';
    import { Search } from 'lucide-react';

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
        <div className="p-4">
          <Input
            placeholder="Search..."
            prefix={<Search />}
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
