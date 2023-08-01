export const getUserIpDetails = ({userIp = '0.0.0.0', userName, ...rest}) => [userName, userIp];

export const getTopThree = ([mark1 = null, mark2 = null, mark3 = null, ...rest]) => [mark1, mark2, mark3];