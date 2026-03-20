import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
  const products = [
    {
      icon: '☁️',
      title: '云计算平台',
      tag: '基础设施',
      description: '企业级云计算平台，提供弹性计算、存储、网络等全方位云服务，支持公有云、私有云和混合云部署模式。',
      features: ['弹性伸缩，按需付费', '99.99% 高可用保障', '多区域容灾备份', '7×24小时技术支持']
    },
    {
      icon: '🤖',
      title: 'AI 智能引擎',
      tag: '人工智能',
      description: '基于深度学习的智能分析平台，提供图像识别、自然语言处理、预测分析等 AI 能力，助力业务智能化升级。',
      features: ['预训练模型开箱即用', '支持自定义模型训练', 'API 快速集成', '企业级数据安全']
    },
    {
      icon: '📱',
      title: '移动解决方案',
      tag: '应用开发',
      description: '一站式移动应用开发平台，提供跨平台开发框架、移动中间件和运营分析工具，快速构建高质量移动应用。',
      features: ['一次开发多端运行', '丰富的组件库', '实时数据分析', '消息推送服务']
    },
    {
      icon: '🔐',
      title: '安全网关',
      tag: '网络安全',
      description: '零信任安全架构，提供身份认证、访问控制、威胁检测等全方位安全防护，保障企业数字资产安全。',
      features: ['零信任架构', '实时威胁检测', '细粒度权限控制', '安全审计日志']
    },
    {
      icon: '📊',
      title: '数据中台',
      tag: '大数据',
      description: '企业级数据中台解决方案，实现数据采集、存储、计算、分析全流程管理，释放数据价值。',
      features: ['多源数据整合', '实时数据处理', '可视化分析', '智能数据治理']
    },
    {
      icon: '🔗',
      title: '物联网平台',
      tag: 'IoT',
      description: '全栈式物联网平台，支持海量设备接入、数据采集中边缘计算，助力企业实现万物互联。',
      features: ['百万级设备接入', '边缘计算能力', '设备远程管理', '规则引擎']
    }
  ];

  const solutions = [
    {
      icon: '🏢',
      title: '企业办公',
      description: '数字化办公解决方案，提升协作效率'
    },
    {
      icon: '🛒',
      title: '智慧零售',
      description: '全渠道零售解决方案，驱动业务增长'
    },
    {
      icon: '🏭',
      title: '智能制造',
      description: '工业互联网解决方案，实现智能制造'
    },
    {
      icon: '🏥',
      title: '智慧医疗',
      description: '医疗数字化解决方案，优化就医体验'
    }
  ];

  return (
    <div className="products-page">
      {/* 页面头部 */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>产品与服务</h1>
          <p>全方位技术产品矩阵，满足企业多样化需求</p>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="products-list">
        <div className="products-list-grid">
          {products.map((product, index) => (
            <div className="product-list-card" key={index}>
              <div className="product-list-header">
                <div className="product-list-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-list-body">
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/tech-website/contact" className="product-list-btn">
                  了解详情
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 行业解决方案 */}
      <section className="solutions-section">
        <div className="section-header">
          <h2>行业解决方案</h2>
          <p>针对不同行业特点，提供专业的解决方案</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-icon">{solution.icon}</div>
              <h4>{solution.title}</h4>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="products-cta">
        <h2>需要定制化解决方案？</h2>
        <p>我们的专家团队将为您提供一对一咨询服务</p>
        <Link to="/tech-website/contact" className="btn-primary">
          联系我们 →
        </Link>
      </section>
    </div>
  );
}

export default Products;
