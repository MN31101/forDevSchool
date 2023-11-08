class Warrior {
    #listRanks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    #listDescription = new Array();
    #listResponses = ["Easy fight", "A good fight", "An intense fight", "You've been defeated", "Invalid level"];
    #rankWarrior = "Pushover";
    #levelWarrior = 1;
    #experienceWarrior = 100;


    #setRank(level) {
        this.#rankWarrior = this.#listRanks[Math.trunc(level / 10)]
    }

    #setLevel(experience) {
        if (experience > 10000) this.#experienceWarrior = experience = 10000;
        this.#levelWarrior = Math.trunc(experience / 100);
        this.#setRank(this.#levelWarrior)
    }

    level() {
        return this.#levelWarrior;
    }

    experience() {
        return this.#experienceWarrior;
    }

    rank() {
        return this.#rankWarrior;
    }

    achievements() {
        return this.#listDescription;
    }

    training(array) {
        if (array[2] <= this.#levelWarrior) {
            this.#experienceWarrior += array[1];
            this.#listDescription.push(array[0])
            this.#setLevel(this.#experienceWarrior)
            return array[0];
        }
        return "Not strong enough";
    }

    battle(level) {
        switch (true) {
            case(level <= 0 || level > 100): {
                return this.#listResponses[4];
            }
            case(this.#levelWarrior < level && (Math.abs(this.#levelWarrior - level)) > 4 && this.#levelWarrior % 10 > level % 10 ): {
                return this.#listResponses[3]
            }
            case(this.#levelWarrior < level): {
                this.#experienceWarrior += 20 * Math.pow(level - this.#levelWarrior, 2)
                this.#setLevel(this.#experienceWarrior)
                return this.#listResponses[2];
            }
            case(this.#levelWarrior - level === 0): {
                this.#experienceWarrior += 10;
                this.#setLevel(this.#experienceWarrior)
                return this.#listResponses[1];
            }
            case(this.#levelWarrior - level === 1): {
                this.#experienceWarrior += 5;
                this.#setLevel(this.#experienceWarrior)
                return this.#listResponses[1];
            }
            case(this.#levelWarrior - level > 1): {
                return this.#listResponses[0];
            }
        }
    }
}

