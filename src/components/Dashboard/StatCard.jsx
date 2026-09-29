function StatCard({ icon: Icon, title, value, description }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon size={20} />
      </div>

      <div className="stat-value">
        {value}
      </div>

      <p className="stat-title">
        {title}
      </p>

      <p className="stat-description">
        {description}
      </p>
    </div>
  );
}

export default StatCard;