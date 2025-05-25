import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTheme from '../../theme'
import ChecklistRow from './checklist-row'

const checklist = 
    {
        title: 'Senior Interface Design Morning Checklist',
        items: [
            'Brew a pot of coffee',
            'Refill the soap dispenser in the restroom',
            'Sweep the floor using the carpet sweeper',
            'Wipe down the desk surfaces in each cubicle',
            'Dust the Lumon Design System and Appendices',
            'Return vending machine tokens to jar',
            'Review employee detached components in Figma',
            "Check the number of color used in each files",
            'Acknowledge Dylan Field Portrait (verbally or silently)',
            'Inspect keyboards for weak keys',
            'Self-Assess: Can I design today?',
            'Check toilets for unflushed waste',
            'Inspect office cranniers for interdepartmental developpers (unlikely)',
            'Test each chair',
            'Check/refill copier paper'
        ]
    }


const Checklist = () => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
        },
        title: {
            fontFamily: 'VT323',
            fontSize: 32,
            color: AppTheme.colors.primary,
            maxWidth: '100%',
            flexWrap: 'wrap',
        },
        divider: {
            height: 2,
            backgroundColor: AppTheme.colors.primary,
            width: '100%',
        }
    })

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{checklist.title}</Text>
        <View style={styles.divider} />
        {checklist.items.map((item, index) => (
            <ChecklistRow key={index} text={item} />
        ))}
      </View>
    )
}

export default Checklist