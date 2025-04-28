const parseEnv = () => {
    // Write your code here 
    let result = '';
    Object.entries(process.env).
        forEach(([index, item]) => {
            if (index.startsWith('RSS_')) {
                result += `${index}=${item}; `;
            }
        });
    console.log(result);
};

parseEnv();