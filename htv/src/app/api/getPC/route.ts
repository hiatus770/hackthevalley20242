import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {

    const db = neon(process.env.DATABASE_URL as string); 

    async function onePart(item: string) {
        try {
            // Query the database with Neon
            const query = `SELECT * FROM ${item}`;
            const result = await db(query);

    
            // Return the inserted data to the frontend
            return result;
        } catch (error) {
            console.error('Error retrieving part:', error);
            return [];
        }
    }

    // Fetch all the parts
    const cpus = await onePart("CPU");
    const gpus = await onePart("GPU");
    const mot = await onePart("MOTHERBOARD");
    const ram = await onePart("RAM");
    const pccase = await onePart("PCCASE");
    const cool = await onePart("COOLING");
    const psu = await onePart("PSU");
    const hdd = await onePart("HARDDRIVE");

    // Check for valid PC builds by compatability
    let builds = [];
    for (var a = 0; a < cpus.length; a++){
        //console.log(cpus[a]["ddr"]);
        for (var b = 0; b < gpus.length; b++){
            for (var c = 0; c < mot.length; c++){
                
                for (var d  = 0; d < ram.length; d++){
                    for (var e = 0; e < pccase.length; e++){
                        for (var f = 0; f < cool.length; f++){
                            for (var g = 0; g < psu.length; g++){
                                for (var h = 0; h < hdd.length; h++){
                                    //console.log(cpus[a]["ddr"] == mot[c]["ddr"]);
                                    //console.log(JSON.stringify(cpus[d]["ddr"]), JSON.stringify(mot[c]["ddr"]));
                                    if ((cpus[a]["ddr"] == mot[c]["ddr"]) && (mot[c]["ddr"] == ram[d]["ddr"])){
                                        if (cpus[a]["socket_type"] == mot[c]["socket_type"]){
                                            if (cpus[a]["chipset"] == mot[c]["chipset"]){
                                                if ((cpus[a]["pcie"] == mot[c]["pcie"]) && (mot[c]["pcie"] == gpus[b]["pcie"])){
                                                    if (mot[c]["power_connect"] == psu[g]["power_connect"]){
                                                        if (Number(psu[g]["wattage"]) >= Number(cpus[a]["tdp"]) + Number(gpus[b]["psu"])){
                                                            builds.push([cpus[a],gpus[b],mot[c],ram[d],pccase[e],cool[f],psu[g],hdd[h]]);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(builds.length);
    // Call the POST function and handle the response
    return NextResponse.json({data: builds}); // Return the deleted row if you used RETURNING
}

