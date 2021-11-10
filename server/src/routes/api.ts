import { ApiResponse } from '@models/apiResponse/apiResponse.model';
import { IVersionData } from '@models/versionData/versionData.interface';
import { Express } from 'express'

export default function (app: Express): void {
    app.get('/api', (req, res) => {
        res.json({ message: `API called.` });
    });

    app.get('/api/version', (req, res) => {
        const versionData: IVersionData = {
            versionNumber: process.env.APP_VERSION
        }

        res.json(new ApiResponse('Version data successfully received.', versionData));
    });

    app.get('/api/healthcheck', (req, res) => {
        res.json({ message: 'API is functioning normally.' });
    });
}