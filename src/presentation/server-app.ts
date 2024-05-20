import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {


    static run({base,limit,showTable, fileDestination, fileName}: RunOptions) {
        console.log("ServerApp is running...");
        
        const table = new CreateTable().execute({base, limit})
        const wasSave = new SaveFile().execute({
            fileContent: table, 
            fileDestination,
            fileName
        })
        if(showTable ) console.log(table);

        (wasSave) 
        ? console.log('File saved')
        : console.log('File not saved');
        
        
    }

}