export class User {
    constructor(
        public displayName: string,
        public email: string,
        public photoURL: string,
        public providerId: string,
        public uid: string
    ) { }
}
