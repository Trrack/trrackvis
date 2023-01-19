import { faCheck, faSquarePlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconConfig } from '../../utils/IconConfig'

import {Task} from '../setup'

export const iconConfig: IconConfig<{
    tasks: Task[]
}, string, any>  = {
    'add-task': {
        glyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faSquarePlus}
                        color="gray"
                    />
                </g>
            </g>
        ),
        currentGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faSquarePlus}
                        color="cornflowerblue"
                    />
                </g>
            </g>
        ),
        backboneGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faSquarePlus}
                        color="gray"
                    />
                </g>
            </g>
        ),
        bundleGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faSquarePlus}
                        color="gray"
                    />
                </g>
            </g>
        ),
        hoverGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-8.5, -8.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={17}
                        height={17}

                        icon={faSquarePlus}
                        color="gray"
                    />
                </g>
            </g>
        ),
    },
    'remove-task': {
        glyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faTrash}
                        color="gray"
                    />
                </g>
            </g>
        ),
        currentGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faTrash}
                        color="cornflowerblue"
                    />
                </g>
            </g>
        ),
        backboneGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faTrash}
                        color="gray"
                    />
                </g>
            </g>
        ),
        bundleGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faTrash}
                        color="gray"
                    />
                </g>
            </g>
        ),
        hoverGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-8.5, -8.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={17}
                        height={17}

                        icon={faTrash}
                        color="gray"
                    />
                </g>
            </g>
        ),
    },
    'complete-task': {
        glyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faCheck}
                        color="gray"
                    />
                </g>
            </g>
        ),
        currentGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faCheck}
                        color="cornflowerblue"
                    />
                </g>
            </g>
        ),
        backboneGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faCheck}
                        color="gray"
                    />
                </g>
            </g>
        ),
        bundleGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faCheck}
                        color="gray"
                    />
                </g>
            </g>
        ),
        hoverGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-8.5, -8.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={17}
                        height={17}

                        icon={faCheck}
                        color="gray"
                    />
                </g>
            </g>
        ),
    },
    'incomplete-task': {
        glyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faX}
                        color="gray"
                    />
                </g>
            </g>
        ),
        currentGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faX}
                        color="cornflowerblue"
                    />
                </g>
            </g>
        ),
        backboneGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}
                        icon={faX}
                        color="gray"
                    />
                </g>
            </g>
        ),
        bundleGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-7.5, -7.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={15}
                        height={15}

                        icon={faX}
                        color="gray"
                    />
                </g>
            </g>
        ),
        hoverGlyph: () => (
            <g>
                <circle fill="white" r={10}></circle>
                <g transform="translate(-8.5, -8.5)">
                    <FontAwesomeIcon
                        fixedWidth
                        width={17}
                        height={17}

                        icon={faX}
                        color="gray"
                    />
                </g>
            </g>
        ),
    },
}