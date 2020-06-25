export function responseOk(body: Object) {
    const response = {
        headers: {'content-type' : 'application/json'},
        statusCode: 200,
        body: JSON.stringify(body)
    };
    return response;
}

export function responseTimeout() {
    const response = {
        statusCode: 440
    };
    return response;
}

export function formatResult(result: any): any {
    let data = [];
    if (result.recordset && result.recordset.length > 0) {
        if (result.recordset[0].result) {
            data = result.recordset[0].result;
        } else {
            data = result.recordset;
        }
    }
    return data;
}

export function responseError(err: any) {
    const response = {
        statusCode: 500,
        body: err
    };
    return response;
}

export function responseNotFound(){
    const response = {
        statusCode: 404,
    };
    return response;
}