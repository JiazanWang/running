interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://yihong.run',
  logo: 'https://www.notion.so/image/attachment%3A0dfd0b3b-8ea4-464c-8a87-4bc7b31def14%3Aa65c33dc772bbd71afad01609023c42.jpg?table=collection&id=fffa91b5-8f66-8156-8c92-000bfcb959d7&t=fffa91b5-8f66-8156-8c92-000bfcb959d7',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.wangjiazan.com',
    },
    {
      name: 'About',
      url: 'https://wangjiazan.com',
    },
  ],
};

export default data;
