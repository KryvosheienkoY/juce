let currentPlan = 0;
let sliderInfo = [
    {
        storage: {min: 250, max: 5000, step: 250},
        transfer: {min: 1000, max: 20000, step: 1000}
    },
    {
        storage: {min: 20000, max: 100000, step: 5000},
        transfer: {min: 80000, max: 400000, step: 20000}
    },
    {
        storage: {min: 20000, max: 100000, step: 5000},
        transfer: {min: 80000, max: 400000, step: 20000}
    }
];

let diagram = [
    {
        name: "aws",
        prepaid: 0,
        prepaid_storage: 0,
        prepaid_transfer: 0,
        storage: 10,
        transfer: 9
    },
    {
        name: "azure",
        prepaid: 0,
        prepaid_storage: 0,
        prepaid_transfer: 0,
        storage: 8,
        transfer: 9
    },
    {
        name: "google",
        prepaid: 0,
        prepaid_storage: 0,
        prepaid_transfer: 0,
        storage: 8,
        transfer: 8
    },
    [
        {
            name: "juce",
            prepaid: 1500,
            prepaid_storage: 250,
            prepaid_transfer: 1000,
            storage: 1,
            transfer: 1
        },
        {
            name: "juce",
            prepaid: 90000,
            prepaid_storage: 20000,
            prepaid_transfer: 80000,
            storage: 4.5,
            transfer: 2.25
        },
        {
            name: "juce",
            prepaid: 180000,
            prepaid_storage: 20000,
            prepaid_transfer: 80000,
            storage: 9,
            transfer: 0
        }
    ]
];

function updateSlider(slider, info)
{
    slider.min = info.min;
    slider.max = info.max;
    slider.step = info.step;
    slider.value = info.min;
}

function formatCapacity(capacity)
{
    let unit = "Gb";
    if (capacity > 1000)
    {
        unit = "Tb";
        capacity /= 1000;
    }

    return capacity + " " + unit;
}

function updateSliderText(storage, transfer)
{
    document.getElementById("totalStorage").innerText = formatCapacity(storage);
    document.getElementById("totalTransfer").innerText = formatCapacity(transfer);
}

function sqrtGraph(storage, transfer, sum)
{
    return (sum / (sliderInfo[currentPlan].storage.max * 10 + sliderInfo[currentPlan].transfer.max * 9));
}

function updateGraph(storage, transfer)
{
    let maxHeight = document.getElementById("diagram").clientHeight - document.getElementById("icons").clientHeight - document.getElementById("aws_price").offsetHeight;
    for (vendor of diagram)
    {
        if (Array.isArray(vendor))
            vendor = vendor[currentPlan];
        let sum = vendor.prepaid + (storage - vendor.prepaid_storage) * vendor.storage + (transfer - vendor.prepaid_transfer) * vendor.transfer;
        let height = Math.ceil(maxHeight * sqrtGraph(storage, transfer, sum));
        document.getElementById(vendor.name + "_price").innerText = Math.ceil(sum / 100) + "€";
        document.getElementById(vendor.name + "_line").style.height = height + "px";
    }
}

function updateComparison()
{
    updateSliderText(document.getElementById("storage").value, document.getElementById("transfer").value);
    updateGraph(document.getElementById("storage").value, document.getElementById("transfer").value);
}

function switchPlan(plan)
{
    if (currentPlan !== plan)
    {
        updateSlider(document.getElementById("storage"), sliderInfo[plan]["storage"]);
        updateSlider(document.getElementById("transfer"), sliderInfo[plan]["transfer"]);

        document.getElementsByClassName("comparison_card")[currentPlan].style.opacity = "0.6";
        document.getElementsByClassName("comparison_card")[plan].style.opacity = "1";

        currentPlan = plan;
        updateComparison();
    }
}
