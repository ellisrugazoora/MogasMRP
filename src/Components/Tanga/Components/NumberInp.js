import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";

function NumberInp(props){
    function handlechange(number){
        props.onChange(number, props.prod);
    }
    return (
        <NumberInput precision={2} size={'md'} step={0.2} defaultValue={props.init} onChange={handlechange} value={props.value} width={'150px'}>
            <NumberInputField bg={"white"} />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default NumberInp;