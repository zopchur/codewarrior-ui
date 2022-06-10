import { of } from "rxjs";

const BACKEND_PROFILE = {
    "draftId": "451ccd06-7b87-4b15-b94c-2cb862327362",
    "name": "server-tdi-core",
    "profile": [
        "tenant"
    ],
    "filePath": "s3-gemalto-tdisa-d-ew1-conf:config-files-sg/config-draft/server-tdi-core-tenant.properties-451ccd06-7b87-4b15-b94c-2cb862327362",
    "requestedBy": "https://idp-authsg.tdisa.ew1.msi-dev.acloud.gemalto.com/auth/realms/CONFIG-WEB-V1",
    "requestedOn": 1651476954001,
    "status": "CREATED"
}

export class AddTenantServiceMock {
    addTenant(payload?: any) {

        return of(BACKEND_PROFILE)
    }

}

export class GenericConfigurationServiceMock {
    getApplications() {
        return of([
            "server-tdi-core",
            "server-tdi-profile"
        ]);
    }

    createDraft(payload?: any) {
        return of({
            "draftId": "d522d724-a5c2-4592-a406-69e7d0466fc8",
            "name": "server-tdi-core",
            "profile": [
                "application"
            ],
            "filePath": "s3-gemalto-tdisa-d-ew1-conf:config-files-sg/config-draft/server-tdi-core-application.properties-d522d724-a5c2-4592-a406-69e7d0466fc8",
            "requestedBy": "https://idp-authsg.tdisa.ew1.msi-dev.acloud.gemalto.com/auth/realms/CONFIG-WEB-V1",
            "requestedOn": 1652158784739,
            "status": "CREATED"
        })

    }

}

export class MatDialogDataMock {

    configDraft = {
        "draftId": "cb2fd83f-a911-4e87-a784-ac7f16479796",
        "name": "server-tdi-core",
        "profile": [
            "application"
        ],
        "filePath": "s3-gemalto-tdisa-d-ew1-conf:config-files-sg/config-draft/server-tdi-core-application.properties-cb2fd83f-a911-4e87-a784-ac7f16479796",
        "requestedBy": "https://idp-authsg.tdisa.ew1.msi-dev.acloud.gemalto.com/auth/realms/CONFIG-WEB-V1",
        "requestedOn": 1652156334776,
        "status": "CREATED",
        "propertySources": [
            {
                "text": "scs.tenants.poc2.authorization.issuers.iss2.max-exp-seconds=31536000\nscs.tenants.poc2.authorization.issuers.iss2.restrict-scenario-by-jwt-claim=jti\nscs.tenants.poc2.authorization.issuers.iss2.keys.e9409537-4a6e-4dbc-b45e-bdb057c00e81.alg=ES256"
            }
        ]
    };

    previousVersionData = {
        "name": "server-tdi-core",
        "profile": [
            "tenant"
        ],
        "propertySources": [
            {
                "name": "S3:s3-gemalto-tdisa-d-ew1-conf",
                "source": {
                    "scs.tenants.Tenant1.authorization.issuers.iss1.key": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErus9rDftfF5NGmEI/W6u72pL/tD6\ndiMSE2ICYk1O9FReADD7DlzFVUbmVP7vMjnszHvGf5m949r6DMq7spgQHQ==\n-----END PUBLIC KEY-----\n",
                    "scs.tenants.Tenant1.authorization.issuers.iss1.value": "Tenant1",
                    "scs.tenants.Tenant2.authorization.issuers.iss1.aud": "TDI-Legitimation-srv2",
                    "scs.tenants.Tenant2.authorization.issuers.iss1.alg": "ES256",
                    "scs.tenants.Tenant1.authorization.issuers.iss1.aud": "TDI-Legitimation-srv",
                    "scs.tenants.Tenant1.authorization.issuers.iss1.alg": "ES256",
                    "scs.tenants.Tenant2.authorization.issuers.iss1.key": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErus9rDftfF5NGmEI/W6u72pL/tD6\ndiMSE2ICYk1O9FReADD7DlzFVUbmVP7vMjnszHvGf5m949r6DMq7spgQHQ==\n-----END PUBLIC KEY-----\n",
                    "scs.tenants.Tenant2.authorization.issuers.iss1.value": "Tenant2"
                },
                "text": "scs.tenants.Tenant1.authorization.issuers.iss1.key=-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErus9rDftfF5NGmEI/W6u72pL/tD6\ndiMSE2ICYk1O9FReADD7DlzFVUbmVP7vMjnszHvGf5m949r6DMq7spgQHQ==\n-----END PUBLIC KEY-----\n\nscs.tenants.Tenant1.authorization.issuers.iss1.value=Tenant1\nscs.tenants.Tenant2.authorization.issuers.iss1.aud=TDI-Legitimation-srv2\nscs.tenants.Tenant2.authorization.issuers.iss1.alg=ES256\nscs.tenants.Tenant1.authorization.issuers.iss1.aud=TDI-Legitimation-srv\nscs.tenants.Tenant1.authorization.issuers.iss1.alg=ES256\nscs.tenants.Tenant2.authorization.issuers.iss1.key=-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErus9rDftfF5NGmEI/W6u72pL/tD6\ndiMSE2ICYk1O9FReADD7DlzFVUbmVP7vMjnszHvGf5m949r6DMq7spgQHQ==\n-----END PUBLIC KEY-----\n\nscs.tenants.Tenant2.authorization.issuers.iss1.value=Tenant2\n"
            }
        ]
    };

    data = { configDraft: this.configDraft, previousVersion: this.previousVersionData };

}

export class MatDialogRefMock {
    close() {

    }
}

export class MockDatePipe {
    transform() {

    }

}