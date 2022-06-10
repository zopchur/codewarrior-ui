export class KeycloakServiceStub {

    getUserRoles(allRoles?: boolean): string[] {
        return ['admin'];
    }
    logout() {

    }
    getUsername(): string {
        return 'nand'
    }
}