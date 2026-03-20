import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入电话';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = '请输入公司名称';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟提交延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 实际项目中这里会调用 API
    console.log('表单提交数据:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      company: '',
      email: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: '电话咨询',
      content: '400-888-8888',
      link: 'tel:400-888-8888'
    },
    {
      icon: '✉️',
      title: '邮件联系',
      content: 'contact@techcorp.com',
      link: 'mailto:contact@techcorp.com'
    },
    {
      icon: '📍',
      title: '公司地址',
      content: '北京市朝阳区科技园区A座',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* 页面头部 */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>联系我们</h1>
          <p>期待与您的合作，请填写下方表单，我们将尽快与您联系</p>
        </div>
      </section>

      {/* 联系内容 */}
      <section className="contact-content">
        <div className="contact-grid">
          {/* 联系信息 */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div className="contact-info-card" key={index}>
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <p><a href={info.link}>{info.content}</a></p>
                ) : (
                  <p>{info.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* 表单 */}
          <div className="contact-form-wrapper">
            {!isSubmitted ? (
              <>
                <h2>预约咨询</h2>
                <p className="form-subtitle">填写以下信息，我们的顾问将在24小时内与您联系</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">姓名 <span>*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">电话 <span>*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入您的手机号码"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">公司名称 <span>*</span></label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="请输入您的公司名称"
                      className={errors.company ? 'error' : ''}
                    />
                    {errors.company && <span className="error-message">{errors.company}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="请输入您的邮箱（选填）"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">留言</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请描述您的需求或问题（选填）"
                      rows="4"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '提交中...' : '提交咨询'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>提交成功！</h3>
                <p>感谢您的咨询，我们的专业顾问将在24小时内与您联系。</p>
                <button className="reset-btn" onClick={handleReset}>
                  继续提交
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <section className="contact-footer">
        <h3>关注我们</h3>
        <div className="social-links">
          <a href="#" className="social-link" title="微信">💬</a>
          <a href="#" className="social-link" title="微博">📢</a>
          <a href="#" className="social-link" title="LinkedIn">💼</a>
          <a href="#" className="social-link" title="GitHub">💻</a>
        </div>
        <p>© 2024 TechCorp. All rights reserved.</p>
      </section>
    </div>
  );
}

export default Contact;
