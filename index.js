(()=>{

    // P = V * I
    // V = I * R
    // P = I^2 * R
    // P = V*V / R 

    const input_voltage = 12;
    
    const load_amps = 20/1000;
    // const load_amps = 2;

    const volts_for_load = 5;
    const resistance_of_load = volts_for_load/load_amps;

    const watts_of_resistor = .25;
    const resistor_volt_drop_needed = input_voltage-volts_for_load;

    const resistance_needed = resistor_volt_drop_needed*resistor_volt_drop_needed / watts_of_resistor;

    const amps_through_resistor = resistor_volt_drop_needed/resistance_needed;

    console.log(JSON.stringify({resistance_needed,amps_through_resistor},null,2));

})();