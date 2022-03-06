function impuesto(state)
{
    const estado = {
        'TX':6.25,
        'AL':4,
        'CA':8.25,
        'NV':8,
        'UT':6.65,
    }
    return estado[state];
}
export default impuesto;