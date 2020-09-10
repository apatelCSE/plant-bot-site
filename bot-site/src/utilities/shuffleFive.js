const shuffleFive = (tasks) => {
    let shuffled = shuffle(tasks);
    shuffled = shuffled.slice(0, 5);
    return shuffled;
}

export default shuffleFive;