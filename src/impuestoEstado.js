function impuesto(state)
{
    const estado = {
        'TX':0.0625,
        'AL':0.04,
        'CA':0.085,
        'NV':0.08,
        'UT':0.0665,
    }
    return estado[state];
}
export default impuesto;