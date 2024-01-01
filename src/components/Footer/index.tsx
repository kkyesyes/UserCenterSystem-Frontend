import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'KK无限矿业集团人力管理系统';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'International Oil',
          title: '石油国际',
          href: 'https://kkyesyes.github.io/',
          blankTarget: true,
        },
        {
          key: 'Personal Github',
          title: <> <GithubOutlined /> 大陆负责人主页</>,
          href: 'https://kkyesyes.github.io/#about',
          blankTarget: true,
        },
        {
          key: 'Explore',
          title: '钻石智能采集',
          href: 'https://kkyesyes.github.io/#contact',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
