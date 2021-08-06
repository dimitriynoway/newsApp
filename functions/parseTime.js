export default pD => {
  const pastDate = Date.parse(pD);
  const cD = new Date();
  const currentDate = Date.parse(cD);

  const diff = currentDate - pastDate;
  if (diff < 1000) return 'Now';
  const diffInSeconds = Math.floor(diff / 1000);
  if (diffInSeconds == 1) return `1 second ago ago`;
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes == 1) return `1 minute ago`;
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours == 1) return `1 hour ago`;
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays == 1) return '1 day ago';
  if (diffInDays < 31) return `${diffInDays} days ago`;
  const diffInMonths = Math.floor(diffInDays / 31);
  if (diffInMonths == 1) return '1 month ago';
  if (diffInMonths < 12) return `${diffInMonths} months ago`;
  else {
    return 'Long ago...';
  }
};
