export async function allureStep(stepDefinition, method) {
    return await allure.createStep(stepDefinition, async () => {
        try {
            return await method();
        } catch (error) {
            throw error;
        }
    })();
}