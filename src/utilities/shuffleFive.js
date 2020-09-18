const shuffleFive = (tasks) => {
    for(let i = tasks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = tasks[i];
        tasks[i] = tasks[j];
        tasks[j] = temp;
    }
    let shuffled = tasks.slice(0, 5);
    return shuffled;
}

export default shuffleFive;