declare const info: {
    $schema: string;
    chain_1: {
        chain_name: string;
        client_id: string;
        connection_id: string;
    };
    chain_2: {
        chain_name: string;
        client_id: string;
        connection_id: string;
    };
    channels: {
        chain_1: {
            channel_id: string;
            port_id: string;
        };
        chain_2: {
            channel_id: string;
            port_id: string;
        };
        ordering: string;
        version: string;
        tags: {
            status: string;
            preferred: boolean;
        };
    }[];
}[];
export default info;
