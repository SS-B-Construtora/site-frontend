/**
 * @param dateValue -
 * @returns 
 */
export const formatDate = (dateValue: string): string => {
  const date = new Date(dateValue);
  
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }
  
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

/**
 * @param dateValue 
 * @returns 
 */
export const formatDateLong = (dateValue: string): string => {
  const date = new Date(dateValue);
  
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }
  
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * @param dateValue
 * @returns 
 */
export const getTimeAgo = (dateValue: string): string => {
  const date = new Date(dateValue);
  
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }
  
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Hoje';
  } else if (diffInDays === 1) {
    return 'Há 1 dia';
  } else if (diffInDays < 30) {
    return `Há ${diffInDays} dias`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? 'Há 1 mês' : `Há ${months} meses`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? 'Há 1 ano' : `Há ${years} anos`;
  }
};

/**
 * @param dateString
 * @returns 
 */
export const dateStringToTimestamp = (dateString: string): number => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Data inválida: ${dateString}`);
  }
  return date.getTime();
};

/**
 * @param daysAgo
 * @returns 
 */
export const getDaysAgoTimestamp = (daysAgo: number): number => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.getTime();
};
