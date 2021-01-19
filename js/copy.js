for (let ingredient in state) {
    if (state[ingredient]) {
        document
            .querySelector(
                `.btn-${ingredient
                    .split(/(?=[A-Z])/)
                    .map((l) => l.toLowerCase())
                    .join('-')}`
            )
            .classList.add('active');
    } else {
        document
            .querySelector(
                `.btn-${ingredient
                    .split(/(?=[A-Z])/)
                    .map((l) => l.toLowerCase())
                    .join('-')}`
            )
            .classList.remove('active');
    }
}
