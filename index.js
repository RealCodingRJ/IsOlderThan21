class GetAge {

    age = 0;

    constructor(age) {

        this.age = age;
    }

    IsOlderThan21() {
        return this.age >= 21;
    }

    isYoungerThan21() {

        return this.age <= 18;
    }

}

const Age =  new GetAge(21);

if (Age.isYoungerThan21()) {
    console.log("Your Are Young to be Drinking..")
    console.log(Age.isYoungerThan21());
}

if (Age.IsOlderThan21()) {
    console.log("your an Adult You Can Drink as you Please")
    console.log(Age.IsOlderThan21());
}