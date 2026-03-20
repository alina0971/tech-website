import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const features = [
    {
      icon: '🚀',
      title: '高性能架构',
      description: '采用先进的分布式架构设计，支持百万级并发处理，确保系统稳定高效运行。'
    },
    {
      icon: '🔒',
      title: '安全可靠',
      description: '企业级安全防护，多重加密机制，符合国际安全标准，保障数据安全。'
    },
    {
      icon: '⚡',
      title: '极速响应',
      description: '毫秒级响应速度，智能缓存优化，为用户提供流畅的使用体验。'
    },
    {
      icon: '📊',
      title: '数据分析',
      description: '强大的数据分析能力，实时可视化报表，助力企业科学决策。'
    },
    {
      icon: '🔧',
      title: '灵活定制',
      description: '模块化设计，支持深度定制，满足不同行业和场景的个性化需求。'
    },
    {
      icon: '🌐',
      title: '全球部署',
      description: '覆盖全球的数据中心，就近访问，确保世界各地用户都能获得优质体验。'
    }
  ];

  const products = [
    {
      icon: '☁️',
      title: '云计算平台',
      description: '弹性可扩展的云服务，支持多种部署模式，降低企业IT成本。'
    },
    {
      icon: '🤖',
      title: 'AI 智能引擎',
      description: '基于深度学习的智能分析系统，赋能业务智能化升级。'
    },
    {
      icon: '📱',
      title: '移动解决方案',
      description: '一站式移动应用开发平台，快速构建跨平台移动应用。'
    }
  ];

  return (
    <div className="home">
      {/* Banner 区域 */}
      <section className="banner">
        <div className="banner-content">
          <div className="banner-badge">新一代企业级解决方案</div>
          <h1>
            科技创新
            <br />
            <span>引领未来</span>
          </h1>
          <p className="banner-subtitle">
            为企业提供全方位的数字化转型服务，助力业务增长，开启智能化新时代
          </p>
          <div className="banner-cta-group">
            <Link to="/tech-website/contact" className="btn-primary">
              免费试用 →
            </Link>
            <Link to="/tech-website/products" className="btn-secondary">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* 卖点区域 */}
      <section className="features">
        <div className="section-header">
          <h2>核心优势</h2>
          <p>我们致力于为企业提供最先进的技术解决方案</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 产品入口区域 */}
      <section className="products-preview">
        <div className="section-header">
          <h2>热门产品</h2>
          <p>探索我们的核心产品线，找到适合您的解决方案</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">{product.icon}</div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to="/tech-website/products" className="product-link">
                  查看详情 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>准备好开始了吗？</h2>
          <p>立即联系我们，获取专属解决方案和免费试用机会</p>
          <Link to="/tech-website/contact" className="cta-btn-white">
            立即咨询 →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
