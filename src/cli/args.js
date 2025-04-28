const parseArgs = () => {
    // Write your code here 
    let result = '';
    const args = process.argv;
    const length = args.length;

    for (var i = 2; i < length - 1; i+=2) {
        console.log(args[i]);
        result += `${args[i].replace('--', '')} is ${args[i+1]}, `;
    }

    console.log(result);
};

parseArgs();