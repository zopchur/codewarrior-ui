import { of } from "rxjs";

export class MatSnackBarRefMock {

    afterDismissed() {
        return of();
    }
}

export class MatScanBarMock {
    matsnac: MatSnackBarRefMock = new MatSnackBarRefMock;
    open() {
        return this.matsnac;
    }
}

export class MatDialogrRefMock {

    afterClosed() {
        return of();
    }
}

export class MatDialogMock {
    matsnac: MatDialogrRefMock = new MatDialogrRefMock;
    open() {
        return this.matsnac;
    }
}