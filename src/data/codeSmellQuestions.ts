export type CodeSmellAnswer = 'short' | 'long';

export type CodeSmellQuestion = {
    id: string;
    title: string;
    snippet: string;
    correctAnswer: CodeSmellAnswer;
    explanation: string;
};

export const codeSmellQuestions: CodeSmellQuestion[] = [
    {
        id: 'format-name',
        title: 'Format a user name',
        snippet: `public function formatUsername(string $name): string
{
    return strtolower(trim($name));
}`,
        correctAnswer: 'short',
        explanation:
            'This method performs one focused task and is easy to understand at a glance.',
    },
    {
        id: 'process-order',
        title: 'Process an order',
        snippet: `public function processOrder(Order $order): void
{
    $this->validateInventory($order);
    $subtotal = $this->calculateSubtotal($order);
    $tax = $this->calculateTax($subtotal);
    $shipping = $this->calculateShipping($order);
    $total = $subtotal + $tax + $shipping;

    $this->chargeCustomer($order->customer, $total);
    $this->updateInventory($order);
    $this->saveOrder($order, $total);
    $this->sendConfirmation($order);
}`,
        correctAnswer: 'long',
        explanation:
            'This method coordinates validation, calculations, payment, inventory, persistence, and email, giving it several reasons to change.',
    },
    {
        id: 'calculate-discount',
        title: 'Calculate a discount',
        snippet: `public function discountFor(Customer $customer): int
{
    return $customer->isPremium() ? 20 : 0;
}`,
        correctAnswer: 'short',
        explanation:
            'This method expresses one small rule with a clear name and no unrelated responsibilities.',
    },
];
