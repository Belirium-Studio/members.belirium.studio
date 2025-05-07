export class ServiceBase {
    private async __fetch(method: string, url: string, body?: any): Promise<Response> {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method,
                body: body === undefined ? undefined : JSON.stringify(body),
                headers: {
                    Accent: "application/json",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (response.status < 400) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
        });
    }

    protected async _get<ResponseType>(url: string): Promise<ResponseType> {
        return (await this.__fetch("GET", url)).json();
    }
}